// // تحميل مكتبة Three.js إذا لم تكن مضافة
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// // إعداد المشهد والكاميرا
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ alpha: true });

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
// camera.position.set(0, 1, 5); // وضع الكاميرا بشكل مناسب

// // تحميل الموديل
// const loader = new GLTFLoader();
// loader.load('../cool_man.glb', function (gltf) {
//     const model = gltf.scene;
//     scene.add(model);

//     model.position.set(0, -1, -3); // ضبط موقع الموديل
//     model.scale.set(1.5, 1.5, 1.5);

//     // البحث عن العظام المسؤولة عن اليدين وتحريكها للأعلى
//     model.traverse((bone) => {
//         if (bone.isBone) {
//             console.log("Bone Found:", bone.name);
            
//             if (bone.name === "Ctrl_Hand_IK_Left_131") {
//                 bone.rotation.x -= Math.PI / 6; // رفع اليد اليسرى
//             }

//             if (bone.name === "Ctrl_Hand_IK_Right_133") {
//                 bone.rotation.x -= Math.PI / 1.5; // رفع اليد اليمنى
//             }
//         }
//     });

//     animate();
// });

// // // تحديث المشهد
// // function animate() {
// //     requestAnimationFrame(animate);
// //     renderer.render(scene, camera);
// // }
// // model.traverse((bone) => {
// //   if (bone.isBone) {
// //       console.log("Bone Found:", bone.name);
// //   }
// // });
