// ======================================
// KRYVEX
// ENTER THE HUNT
// ======================================


// ======================================
// SCENE
// ======================================

const scene =
    new THREE.Scene();


scene.background =
    new THREE.Color(
        0x05030a
    );


scene.fog =
    new THREE.Fog(
        0x05030a,
        15,
        100
    );


// ======================================
// CAMERA
// ======================================

const camera =
    new THREE.PerspectiveCamera(

        70,

        window.innerWidth /
        window.innerHeight,

        0.1,

        1000

    );


// ======================================
// RENDERER
// ======================================

const renderer =
    new THREE.WebGLRenderer({

        antialias: true

    });


renderer.setSize(

    window.innerWidth,

    window.innerHeight

);


renderer.setPixelRatio(

    Math.min(
        window.devicePixelRatio,
        2
    )

);


document.body.appendChild(

    renderer.domElement

);


// ======================================
// LIGHTING
// ======================================

const ambientLight =

    new THREE.AmbientLight(

        0x553377,

        1.5

    );


scene.add(

    ambientLight

);


const moonLight =

    new THREE.DirectionalLight(

        0x8888ff,

        2

    );


moonLight.position.set(

    10,

    20,

    10

);


scene.add(

    moonLight

);


// ======================================
// GROUND
// ======================================

const groundGeometry =

    new THREE.PlaneGeometry(

        200,

        200

    );


const groundMaterial =

    new THREE.MeshStandardMaterial({

        color: 0x08070c,

        roughness: 1

    });


const ground =

    new THREE.Mesh(

        groundGeometry,

        groundMaterial

    );


ground.rotation.x =

    -Math.PI / 2;


scene.add(

    ground

);


// ======================================
// PLAYER
// ======================================

const player =

    new THREE.Group();


scene.add(

    player

);


// ======================================
// PLAYER BODY
// ======================================

const bodyGeometry =

    new THREE.CapsuleGeometry(

        0.45,

        1.1,

        8,

        16

    );


const bodyMaterial =

    new THREE.MeshStandardMaterial({

        color: 0x24003d,

        emissive: 0x160022,

        roughness: 0.7

    });


const body =

    new THREE.Mesh(

        bodyGeometry,

        bodyMaterial

    );


body.position.y =

    1.2;


player.add(

    body

);


// ======================================
// PLAYER HEAD
// ======================================

const headGeometry =

    new THREE.SphereGeometry(

        0.48,

        24,

        24

    );


const headMaterial =

    new THREE.MeshStandardMaterial({

        color: 0xffd2c2,

        roughness: 0.7

    });


const head =

    new THREE.Mesh(

        headGeometry,

        headMaterial

    );


head.position.y =

    2.25;


player.add(

    head

);


// ======================================
// PLAYER HAIR
// ======================================

const hairGeometry =

    new THREE.SphereGeometry(

        0.52,

        24,

        24

    );


const hairMaterial =

    new THREE.MeshStandardMaterial({

        color: 0x12001c,

        emissive: 0x220033

    });


const hair =

    new THREE.Mesh(

        hairGeometry,

        hairMaterial

    );


hair.scale.set(

    1,

    0.8,

    1

);


hair.position.y =

    2.5;


player.add(

    hair

);


// ======================================
// PLAYER EYES
// ======================================

function createEye(

    x

) {

    const eyeGeometry =

        new THREE.SphereGeometry(

            0.07,

            12,

            12

        );


    const eyeMaterial =

        new THREE.MeshStandardMaterial({

            color: 0xffffff,

            emissive: 0x9b00ff,

            emissiveIntensity: 3

        });


    const eye =

        new THREE.Mesh(

            eyeGeometry,

            eyeMaterial

        );


    eye.position.set(

        x,

        2.3,

        0.43

    );


    player.add(

        eye

    );

}


createEye(

    -0.18

);


createEye(

    0.18

);


// ======================================
// PLAYER POSITION
// ======================================

player.position.set(

    0,

    0,

    5

);


// ======================================
// CRYSTALS
// ======================================

const crystals = [];


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

            color: 0x9b00ff,

            emissive: 0x5a0088,

            emissiveIntensity: 3

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


    scene.add(

        crystal

    );


    crystals.push(

        crystal

    );

}


createCrystal(

    -5,

    -5

);


createCrystal(

    5,

    -5

);


createCrystal(

    -8,

    5

);


createCrystal(

    8,

    5

);


// ======================================
// RUINS
// ======================================

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

            color: 0x151019

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


    scene.add(

        ruin

    );

}


createRuin(

    -12,

    -10

);


createRuin(

    12,

    -10

);


createRuin(

    -15,

    10

);


createRuin(

    15,

    10

);


// ======================================
// PORTAL
// ======================================

const portalGeometry =

    new THREE.TorusGeometry(

        3,

        0.3,

        16,

        64

    );


const portalMaterial =

    new THREE.MeshStandardMaterial({

        color: 0x9b00ff,

        emissive: 0x6a00cc,

        emissiveIntensity: 4

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


scene.add(

    portal

);


// ======================================
// JOYSTICK
// ======================================

const joystick =

    document.getElementById(

        "joystick"

    );


const knob =

    document.getElementById(

        "joystickKnob"

    );


let joystickX = 0;

let joystickY = 0;

let dragging = false;


// Touch start

joystick.addEventListener(

    "touchstart",

    () => {

        dragging = true;

    },

    {

        passive: false

    }

);


// Touch move

joystick.addEventListener(

    "touchmove",

    event => {


        if (!dragging)

            return;


        event.preventDefault();


        const touch =

            event.touches[0];


        const rect =

            joystick.getBoundingClientRect();


        let x =

            touch.clientX -

            (

                rect.left +

                rect.width / 2

            );


        let y =

            touch.clientY -

            (

                rect.top +

                rect.height / 2

            );


        const distance =

            Math.sqrt(

                x * x +

                y * y

            );


        const maxDistance =

            45;


        if (

            distance >

            maxDistance

        ) {


            x =

                x /

                distance *

                maxDistance;


            y =

                y /

                distance *

                maxDistance;


        }


        knob.style.transform =

            `translate(

                calc(-50% + ${x}px),

                calc(-50% + ${y}px)

            )`;


        joystickX =

            x /

            maxDistance;


        joystickY =

            y /

            maxDistance;


    },

    {

        passive: false

    }

);


// Touch end

joystick.addEventListener(

    "touchend",

    () => {


        dragging = false;


        joystickX = 0;

        joystickY = 0;


        knob.style.transform =

            "translate(-50%, -50%)";


    }

);


// ======================================
// GAME LOOP
// ======================================

function animate() {


    requestAnimationFrame(

        animate

    );


    // Player movement

    const speed =

        0.12;


    player.position.x +=

        joystickX *

        speed;


    player.position.z +=

        joystickY *

        speed;


    // Player animation

    if (

        Math.abs(

            joystickX

        ) > 0.1 ||

        Math.abs(

            joystickY

        ) > 0.1

    ) {


        body.rotation.z =

            Math.sin(

                Date.now() *

                0.01

            ) *

            0.05;


    }


    // Camera follow

    camera.position.x =

        player.position.x;


    camera.position.y =

        player.position.y +

        6;


    camera.position.z =

        player.position.z +

        10;


    camera.lookAt(

        player.position.x,

        1,

        player.position.z

    );


    // Crystal animation

    crystals.forEach(

        crystal => {


            crystal.rotation.y +=

                0.02;


            crystal.position.y =

                1 +

                Math.sin(

                    Date.now() *

                    0.003

                ) *

                0.2;


        }

    );


    // Portal animation

    portal.rotation.z +=

        0.01;


    // Render

    renderer.render(

        scene,

        camera

    );

}


animate();


// ======================================
// RESIZE
// ======================================

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
