var camera, scene, renderer;
var terrains, tiles;
var points, lines, trails;
var lightsPool, lights;
var horizon;

var debugMarkers;

var lastUpdateTime;
var lastLightTime;

var stats;


window.onload = function() {
    if (!window.blockchain.backgroundLoaded && window.blockchain.isWebGL) {
        init();
        update();
    }
    window.blockchain.backgroundLoaded = true;
};

function init() {
    var container = document.createElement('div');
    document.querySelector('#canvas-holder').appendChild(container);

    calculateTerrainLengths();

    lines = new Array();
    trails = new Array();
    lights = new Array();
    lightsPool = new Array();
    tiles = new Array();
    debugMarkers = new Array();


    // scene
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, CAMERA_FAR - 200, CAMERA_FAR);

    // camera
    camera = new THREE.PerspectiveCamera(CAMERA_FOV, window.innerWidth / window.innerHeight, 0.1, CAMERA_FAR);
    camera.position.copy(CAMERA_START_POSITION);
    camera.rotation.copy(CAMERA_START_ROTATION);

    // terrain
    createTerrains();
    createPoints();
    createLights();
    createHorizon();
    createFloorTiles();

    // debug
    createDebugMarkers();

    // web gl renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.sortObjects = false;
    renderer.setClearColor(0x000000);
    container.appendChild(renderer.domElement);

    // document.addEventListener('mousewheel', onDocumentMouseWheel, false);
    document.addEventListener('keydown', onKeyDown, false);

    window.addEventListener('resize', onWindowResize, false);

    // stats
    stats = new Stats();
    container.appendChild(stats.dom);

    lastUpdateTime = Date.now();
    lastLightTime = Date.now();
}

function calculateTerrainLengths() {
    var sceneSizes = window.blockchain.scenes;
    CHAPTER_COUNT = sceneSizes.length + 1;

    for (var i = 0; i < CHAPTER_COUNT - 1; i++) {
        var length = sceneSizes[i] * TERRAIN_FROM_PIXELS_FACTOR;
        if (i === CHAPTER_COUNT) {
            TERRAIN_CHAPTER_LENGTHS[i] = length;
        } else {
            TERRAIN_CHAPTER_LENGTHS[i] = length + 200;
        }
        TERRAIN_LENGTH += length;
    }

    TERRAIN_CHAPTER_LENGTHS[CHAPTER_COUNT - 1] = TERRAIN_EXTRA_SIZE;
}

// debug
function createDebugMarkers() {
    var loader = new THREE.FontLoader();
    loader.load('/css/fonts/helvetiker_regular.typeface.json', function(font) {
        // create marker for each chapter
        var z = 0;
        for (var i = 0; i < CHAPTER_COUNT - 1; i++) {
            var material = new THREE.MeshBasicMaterial({ color: TERRAIN_CHAPTER_COLORS[i] });

            // text
            var textGeometry = new THREE.TextGeometry('Ch ' + (i + 1), {
                font: font,
                size: 2,
                height: 0.2
            });

            var textMesh = new THREE.Mesh(textGeometry, material);
            textMesh.position.set(-25, 5, TERRAIN_OFFSET + z)
            debugMarkers.push(textMesh);

            // plane
            var planeGeometry = new THREE.PlaneGeometry(2, 12, 1, 1);
            var planeMesh = new THREE.Mesh(planeGeometry, material);
            planeMesh.position.set(-17, 1, TERRAIN_OFFSET + z);
            debugMarkers.push(planeMesh);

            z -= TERRAIN_CHAPTER_LENGTHS[i];


            if (DEBUG_ENABLED) {
                scene.add(textMesh);
                scene.add(planeMesh);
            }
        }
    });
}

// terrain
function createTerrains() {
    terrains = new Array();
    var pos = 0;
    for (var i = 0; i < CHAPTER_COUNT; i++) {
        var terrainMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            shininess: 0,
            shading: THREE.FlatShading,
            transparent: true,
            opacity: 1,
            blending: THREE.CustomBlending,
            blendSrc: THREE.SrcAlphaFactor,
            blendDst: THREE.OneFactor,
            vertexColors: THREE.VertexColors
        });

        var terrainMaterialW = new THREE.MeshPhongMaterial({
            color: 0x000000,
            wireframe: true,
            wireframeLinewidth: 1.5,
            shininess: 0,
            blending: THREE.CustomBlending,
            blendSrc: THREE.OneFactor,
            blendDst: THREE.OneFactor,
            blendEquation: THREE.ReverseSubtractEquation
        });

        var terrain = createTerrain(i, pos, terrainMaterial, terrainMaterialW);
        terrains.push(terrain);

        pos += TERRAIN_CHAPTER_LENGTHS[i];
    }
}

function createTerrain(index, pos, mat, matW) {
    // mesh
    var terrainLength = TERRAIN_CHAPTER_LENGTHS[index];
    var mesh = new THREE.PlaneGeometry(TERRAIN_WIDTH, terrainLength, TERRAIN_WIDTH_SEGMENTS, TERRAIN_LENGTH_SEGMENTS);

    mesh.translate(0, TERRAIN_OFFSET + pos + terrainLength / 2, 0);
    mesh.rotateX(-Math.PI / 2);

    var terrain = new THREE.Mesh(mesh, mat);
    scene.add(terrain);

    // move vertices randomly to give shape to the terrain
    var rowCount = TERRAIN_WIDTH_SEGMENTS + 1;
    for (var i = 0; i < mesh.vertices.length - rowCount; i++) {
        var v = mesh.vertices[i];
        v.x += Math.random() * TERRAIN_VARIANCE_FACTOR - 2;
        v.y += Math.random() * TERRAIN_VARIANCE_FACTOR * ((index + 1) * 0.2) - 4;
        v.z += Math.random() * TERRAIN_VARIANCE_FACTOR - 2;

        mesh.vertices[i].copy(v);
    }

    // make sure the fist row of vertices matches the last row of the previous terrain
    var j = 0;
    for (var i = mesh.vertices.length - rowCount; i < mesh.vertices.length; i++) {
        var v = mesh.vertices[i].clone();

        if (index > 0) {
            v.copy(terrains[index - 1].geometry.vertices[j]);
        } else {
            v.x += Math.random() * TERRAIN_VARIANCE_FACTOR - 2;
            v.y += Math.random() * TERRAIN_VARIANCE_FACTOR * ((index + 1) * 0.2) - 4;
            v.z += Math.random() * TERRAIN_VARIANCE_FACTOR - 2;
        }

        mesh.vertices[i].copy(v);
        j++;
    }

    // color blending between terrains
    var color = new THREE.Color(TERRAIN_CHAPTER_COLORS[index]);
    var nextColor = new THREE.Color(TERRAIN_CHAPTER_COLORS[index + 1]);
    var gradientLength = mesh.faces.length / 3;
    for (var i = 0; i < mesh.faces.length; i++) {
        if (index < CHAPTER_COUNT - 1 && i < gradientLength) {
            var r = 1 - (i / gradientLength);
            var c = color.clone();
            c.lerp(nextColor, r);

            mesh.faces[i].color = c;
        } else {
            mesh.faces[i].color = color;
        }

    }

    // wireframe terrain
    // var terrainWireframe = new THREE.Mesh(mesh.clone(), matW);
    // terrain.add(terrainWireframe);

    return terrain;
}

function createPoints() {
    points = new Array();

    // points
    var pointsTexture = new THREE.TextureLoader().load('/images/vertex2.png');
    var pointsMaterial = new THREE.SpriteMaterial({
        color: 0xffffff,
        map: pointsTexture,
        transparent: true,
        opacity: 1,
        depthTest: false
    });

    // one point per vertex
    for (var i = 0; i < terrains.length; i++) {
        var terrain = terrains[i];
        for (var j = 0; j < terrain.geometry.vertices.length; j++) {
            var point = new THREE.Sprite(pointsMaterial.clone());
            point.position.copy(terrain.geometry.vertices[j]);
            point.scale.x = point.scale.y = 0.1;
            point.terrainIndex = i;
            point.vertexIndex = j;

            terrain.add(point);
            points.push(point);
        }
    }

    // sorted by position.z (NOT NEEDED ANYMORE)
    // points.sort(function(a, b) {
    // 	if (a.position.z <= b.position.z)
    // 		return 1;
    // 	return -1;
    // });
}

function createHorizon() {
    var t = new THREE.TextureLoader().load('/images/sample-bkg.jpg');
    t.wrapS = THREE.RepeatWrapping;
    t.wrapT = THREE.RepeatWrapping;

    var m = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        map: t,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 1,
        depthTest: false,
    });

    var g = new THREE.PlaneGeometry(400, 8, 1, 1);
    horizon = new THREE.Mesh(g, m);
    horizon.position.copy(CAMERA_HORIZON_OFFSET);
    scene.add(horizon);
}

function createFloorTiles(font) {
    var z = 0;
    for (var i = 0; i < CHAPTER_COUNT; i++) {
        // transition
        var transitionMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000,
            transparent: true,
            opacity: TILES_MAX_ALPHA,
            depthTest: false,
            blending: THREE.CustomBlending,
            blendSrc: THREE.SrcAlphaFactor,
            blendDst: THREE.SrcAlphaFactor,
        });

        var transitionGeometry = new THREE.PlaneGeometry(600, TILES_TRANSITION_LENGTH, 2, 2);
        var transition = new THREE.Mesh(transitionGeometry, transitionMaterial);

        transition.position.set(0, -10, TERRAIN_OFFSET + z - TILES_TRANSITION_LENGTH / 2);
        transition.rotation.set(-Math.PI / 2, 0, 0);

        scene.add(transition);
        tiles.push(transition);

        // text
        // var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        // var textGeometry = new THREE.TextGeometry('BLOCKCHAIN      CHAPTER ' + (i + 1), {
        // 	font: font,
        // 	size: 0.75,
        // 	height: 0.01
        // });
        // textGeometry.computeBoundingBox();

        // var textMesh = new THREE.Mesh(textGeometry, textMaterial);
        // textMesh.position.set(-20, -9.9, TERRAIN_OFFSET + z - 3);
        // textMesh.rotation.set(-Math.PI / 2, 0, 0);

        // scene.add(textMesh);

        z -= TILES_TRANSITION_LENGTH;


        // ground
        var tileTexture = new THREE.TextureLoader().load('/images/' + TERRAIN_CHAPTER_TILES[i]);
        tileTexture.wrapS = THREE.RepeatWrapping;
        tileTexture.wrapT = THREE.RepeatWrapping;

        var terrainLength = TERRAIN_CHAPTER_LENGTHS[i] - TILES_TRANSITION_LENGTH;
        var zTile = Math.max(1, Math.floor(terrainLength / 250));
        var xTile = 5; //Math.max(1, Math.floor(terrainLength / TERRAIN_WIDTH)) * 3;

        if (xTile % 2 == 0)
            xTile--;

        tileTexture.repeat.set(xTile, zTile);

        // material
        var tileMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff, //TERRAIN_CHAPTER_COLORS[0],
            map: tileTexture,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: TILES_MAX_ALPHA,
            depthTest: false,
            blending: THREE.CustomBlending,
            blendSrc: THREE.SrcAlphaFactor,
            blendDst: THREE.SrcAlphaFactor,
        });

        // mesh
        var tileGeometry = new THREE.PlaneGeometry(600, terrainLength, 2, 2);
        var tile = new THREE.Mesh(tileGeometry, tileMaterial);

        tile.position.set(0, -10, TERRAIN_OFFSET + z - terrainLength / 2);
        tile.rotation.set(-Math.PI / 2, 0, 0);

        scene.add(tile);
        tiles.push(tile);

        z -= terrainLength;
    }

    // clouds
    createClouds();
}

function createClouds() {
    var t = new THREE.TextureLoader().load('/images/clouds.png');
    t.wrapS = THREE.RepeatWrapping;
    t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(1, TERRAIN_LENGTH / 500);

    // material
    var m = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        map: t,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: TILES_MAX_ALPHA,
        depthTest: false,
        blending: THREE.CustomBlending,
        blendSrc: THREE.SrcAlphaFactor,
        blendDst: THREE.OneFactor,
    });

    // mesh
    var g = new THREE.PlaneGeometry(600, TERRAIN_LENGTH + 100, 2, 2);
    var clouds = new THREE.Mesh(g, m);
    clouds.position.set(0, -10, TERRAIN_OFFSET + 50 - TERRAIN_LENGTH / 2);
    clouds.rotation.set(-Math.PI / 2, 0, 0);

    scene.add(clouds);
    tiles.push(clouds);
}

function createLights() {
    for (var i = 0; i < LIGHT_POOL_SIZE; i++) {
        var light = new Light(0, 0, 200);
        lightsPool.push(light);
        scene.add(light.sceneObject);
    }
}

// main loop
function update() {
    requestAnimationFrame(update);

    var now = Date.now();
    var dt = (now - lastUpdateTime) / 1000;
    lastUpdateTime = now;

    spawnLight();
    updateLights(dt);
    // updatePoints();
    updateFloorTiles(dt);

    updateCamera(dt);

    renderer.render(scene, camera);
    stats.update();
}

function updateCamera(dt) {
    var cameraZ = camera.position.z;

    if (CAMERA_AUTO_MOVE) {
        cameraZ -= CAMERA_AUTO_SPEED * dt;
        if (cameraZ < -TERRAIN_LENGTH)
            cameraZ = 0;
    } else {
        cameraZ = -window.blockchain.blockchainController.scrollPos() * TERRAIN_FROM_PIXELS_FACTOR;
    }

    cameraZ = clamp(cameraZ, -TERRAIN_LENGTH, CAMERA_START_POSITION.z);

    camera.position.set(camera.position.x, camera.position.y, cameraZ);

    horizon.position.copy(CAMERA_HORIZON_OFFSET);
    horizon.position.z += cameraZ;
}

function updatePoints() {
    for (var i = 0; i < points.length; i++) {
        var diff = points[i].position.clone();
        diff.sub(camera.position);
        var length = diff.lengthSq();

        points[i].material.opacity = 1 - length / 30000;
    }
}

function updateFloorTiles(dt) {
    if (tiles.length == 0)
        return;

    var opacity = tiles[0].material.opacity + TILES_ALPHA_SPEED * dt;
    if (opacity >= TILES_MAX_ALPHA || opacity <= TILES_MIN_ALPHA) {
        TILES_ALPHA_SPEED *= -1;
        opacity = clamp(opacity, TILES_MIN_ALPHA, TILES_MAX_ALPHA);
    }

    // var offset = tiles[0].material.map.offset.y + TILES_OFFSET_SPEED * dt;
    // if (offset > 1)
    // 	offset = offset - 1;

    // var color;
    // var end = 0;
    // for (var i = 0; i < CHAPTER_COUNT - 1; i++)
    // {
    // 	var terrainLength = TERRAIN_CHAPTER_LENGTHS[i];
    // 	var currentColor = new THREE.Color(TERRAIN_CHAPTER_COLORS[i]);
    // 	var z = camera.position.z;

    // 	if (z >= end && z < terrainLength)
    // 		color = currentColor;

    // 	end += terrainLength;
    // 	var diff = end + z;
    // 	var distance = terrainLength / 3;


    // 	if (diff > 0 && diff < distance)
    // 	{
    // 		var currentColor = new THREE.Color(TERRAIN_CHAPTER_COLORS[i]);
    // 		var nextColor = new THREE.Color(TERRAIN_CHAPTER_COLORS[i + 1]);

    // 		color = currentColor.clone();
    // 		color.lerp(nextColor, 1 - (diff / distance));
    // 		break;
    // 	}
    // }

    for (var i = 0; i < CHAPTER_COUNT; i++) {
        tiles[i].material.opacity = opacity;
        // tiles[i].material.map.offset.set(0, offset);

        // if (color !== undefined)
        // 	tiles[i].material.color = color;
    }
}

// lights
function spawnLight() {
    var now = Date.now();
    var diff = now - lastLightTime;

    if (lightsPool.length == 0 || diff < LIGHT_SPAW_TIME)
        return;

    lastLightTime = now;

    // spawn light in front of camera
    var pos = camera.position.clone();
    pos.x = -50 + Math.random() * 100;
    pos.z -= (50 + Math.random() * 200);

    var light = lightsPool.pop();
    light.sceneObject.position.set(pos.x, LIGHT_HEIGHT, pos.z);
    light.dummy.position.set(pos.x, 0, pos.z);
    light.sceneObject.intensity = LIGHT_INTENSITY;
    light.sceneObject.angle = 0;
    light.finished = false;

    lights.push(light);

    return light;
}

function updateLights(dt, light) {
    var indexesToRemove = new Array();

    // check lights
    for (var i = 0; i < lights.length; i++) {
        updateLight(dt, lights[i]);

        if (lights[i].finished)
            indexesToRemove.push(i);
    }

    // remove lights
    for (var i = 0; i < indexesToRemove.length; i++) {
        var index = indexesToRemove[i];
        var light = lights[index];
        if (light === undefined)
            continue;

        lightsPool.push(light);
        lights.splice(index, 1);
    }
}

function updateLight(dt, light) {
    if (light.finished)
        return;

    var max = Math.PI / 2;
    light.sceneObject.angle = Math.min(max, light.sceneObject.angle + LIGHT_ANGLE_SPEED * dt);
    light.sceneObject.intensity = Math.max(0, light.sceneObject.intensity - LIGHT_INTENSITY_SPEED * dt);

    if (light.sceneObject.intensity == 0)
        light.finished = true;
}

function Light(pos) {
    this.sceneObject = new THREE.SpotLight(0xffffff, LIGHT_INTENSITY, 100, 0, 1);
    this.sceneObject.position.copy(pos)
    this.finished = true;

    this.dummy = new THREE.Object3D();
    this.sceneObject.target = this.dummy;
}

// events
function onKeyDown(key) {
    // console.log(key.keyCode);

    switch (key.keyCode) {
        case 13: // enter
            CAMERA_AUTO_MOVE = !CAMERA_AUTO_MOVE;
            break;

        case 82: // r
            camera.position.copy(CAMERA_START_POSITION);
            break;

        case 68: // d
            DEBUG_ENABLED = !DEBUG_ENABLED;

            for (var i = 0; i < debugMarkers.length; i++) {
                if (DEBUG_ENABLED)
                    scene.add(debugMarkers[i]);
                else
                    scene.remove(debugMarkers[i]);
            }

            break;
    }
}

function onDocumentMouseWheel(wheel) {
    if (CAMERA_AUTO_MOVE)
        return;

    camera.position.set(camera.position.x, camera.position.y, camera.position.z -= wheel.deltaY * CAMERA_SPEED / 50);
    updateCamera();
}

function onWindowResize() {
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}