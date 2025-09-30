import * as THREE from 'three';

// Krijojmë skenën
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

// ======================
// 1. KUBI
// ======================
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cubeMesh = new THREE.Mesh(geometry, material);
cubeMesh.position.x = -4; // e shtyjmë pak anash që të ketë vend për tjerat
scene.add(cubeMesh);

// ======================
// 2. OVAL (Elipsë)
// ======================
const ovalGeometry = new THREE.SphereGeometry(1.5, 32, 32); // bazë si sferë
ovalGeometry.scale(1.5, 1, 1); // e shtrijmë pak që të duket oval
const ovalMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const ovalMesh = new THREE.Mesh(ovalGeometry, ovalMaterial);
ovalMesh.position.x = 0; // qendra
scene.add(ovalMesh);

// ======================
// 3. TREKËNDËSH
// ======================
const triangleGeometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    0, 1, 0,   // pika e sipërme
   -1, -1, 0,  // pika e majtë
    1, -1, 0   // pika e djathtë
]);
triangleGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
triangleGeometry.computeVertexNormals();

const triangleMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff, side: THREE.DoubleSide });
const triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
triangleMesh.position.x = 4; // e shtyjmë djathtas
scene.add(triangleMesh);

// ======================
// Dritë + Renderer
// ======================
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 3);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ======================
// Animacioni
// ======================
function animate() {
    requestAnimationFrame(animate);

    cubeMesh.rotation.x += 0.01;
    cubeMesh.rotation.y += 0.01;

    ovalMesh.rotation.y += 0.01;

    triangleMesh.rotation.z += 0.01;

    renderer.render(scene, camera);
}
animate();
