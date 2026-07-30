// ==============================
// KRYVEX — STEP 1
// 3D DARK FANTASY WORLD
// ==============================

// Scene
const scene = new THREE.Scene();

scene.background = new THREE.Color(0x05030a);

scene.fog = new THREE.Fog(
    0x05030a,
    15,
    100
);


// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(
    0,
    8,
    15
);


// Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

document.body.appendChild(
    renderer.domElement
);


// ==============================
// LIGHTING
// ==============================

// Moon light
const moonLight = new THREE.DirectionalLight(
    0x8888ff,
    1.5
);

moonLight.position.set(
    10,
    20,
    10
);

scene.add(moonLight);


// Ambient light
const ambientLight = new THREE.AmbientLight(
    0x332244,
    1
);

scene.add(ambientLight);


// ==============================
// DARK FANTASY GROUND
// ==============================

const groundGeometry =
    new THREE.PlaneGeometry(
        200,
        200
    );

const groundMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x08080d,
        roughness: 1
    });

const ground =
    new THREE.Mesh(
        groundGeometry,
        groundMaterial
    );

ground.rotation.x =
    -Math.PI / 2;

scene.add(ground);


// ==============================
// MAGICAL CRYSTALS
// ==============================

function createCrystal(
    x,
    z
) {

    const geometry =
        new THREE.OctahedronGeometry(
            0.8,
            0
        );

    const material =
        new THREE.MeshStandardMaterial({
            color: 0x8a00ff,
            emissive: 0x4a0080,
            emissiveIntensity: 2
        });

    const crystal =
        new THREE.Mesh(
            geometry,
            material
        );

    crystal.position.set(
        x,
        1,
        z
    );

    scene.add(crystal);

    return crystal;
}


// Create crystals
const crystals = [];

crystals.push(
    createCrystal(-5, -5)
);

crystals.push(
    createCrystal(5, -5)
);

crystals.push(
    createCrystal(-8, 5)
);

crystals.push(
    createCrystal(8, 5)
);


// ==============================
// ANCIENT RUINS
// ==============================

function createRuin(
    x,
    z
) {

    const geometry =
        new THREE.BoxGeometry(
            3,
            5,
            3
        );

    const material =
        new THREE.MeshStandardMaterial({
            color: 0x17131f
        });

    const ruin =
        new THREE.Mesh(
            geometry,
            material
        );

    ruin.position.set(
        x,
        2.5,
        z
    );

    scene.add(ruin);
}


createRuin(-12, -10);
createRuin(12, -10);
createRuin(-15, 10);
createRuin(15, 10);


// ==============================
// MAGICAL PORTAL
// ==============================

const portalGeometry =
    new THREE.TorusGeometry(
        3,
        0.3,
        16,
        64
    );

const portalMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x8a00ff,
        emissive: 0x5a00aa,
        emissiveIntensity: 3
    });

const portal =
    new THREE.Mesh(
        portalGeometry,
        portalMaterial
    );

portal.position.set(
    0,
    4,
    -25
);

portal.rotation.x =
    Math.PI / 2;

scene.add(portal);


// ==============================
// ANIMATION
// ==============================

function animate() {

    requestAnimationFrame(
        animate
    );

    // Rotate crystals
    crystals.forEach(
        crystal => {

            crystal.rotation.y +=
                0.02;

            crystal.rotation.x +=
                0.01;

        }
    );


    // Rotate portal
    portal.rotation.z +=
        0.01;


    // Render
    renderer.render(
        scene,
        camera
    );
}

animate();


// ==============================
// MOBILE SCREEN RESIZE
// ==============================

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);
