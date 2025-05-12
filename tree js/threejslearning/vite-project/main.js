import * as THREE from "three";
import "./style.css"
import gsap from "gsap"
import {orbitControls} from "three/examples/jsm/controls/OrbitControls";

// scene
const scene = new THREE.Scene();

// sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83",
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

// light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

// camera
const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width/ sizes.height,
    0.1,
    100
);
camera.position.z = 20;
scene.add(camera);

// renderer
const canvas = document.querySelector(".webgl");
const render = new THREE.WebGLRenderer({ canvas });
render.setSize(sizes.width/ sizes.height);
renderer.setPixelRitio(5)
render.render(scene, camera);

// controls
const controls = new orbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoon = false;
controls.autoRotate = true;
controls.autoRotateSpeed = true;

// resize
window.addEventListener("resize", () => {

  // update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // update camera
  camera.updateProjectionMatrix()
  camera.aspect = sizes.width / sizes.height;
  renderer.setSize(sizes.width / sizes.height);
});

const loop = ()=> {
  controls.update()
  mesh.position.y += 0.0;
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
}
loop();

// timeline magic
const t1 = gsap.timeline({default: 
{duration: 1}})
t1.fromTo(mesh.scale, {z: 0, x: 0, y: 0} , {z:1, x: 1, y:1});
t1.fromTo("nav", {y: "-100%"} , {y: "0%"})
t1.fromTo(".title", {opacity: 0 } , {opacity: 1})


// mouse animation color
let mouseDown = false
let rgb = []
window.addEventListener("mousedown" , ()=>{
  mouseDown = true
});
window.addEventListener("mouseup" , ()=>{
  mouseDown = true
});



window.addEventListener("mousemove" , (e)=> {
  if (mouseDown) {
    rgb = [
      Math.round((e.pageX / sizes.width) * 255 ),
      Math.round((e.pageY / sizes.width) * 255 ),
      150,
    ];
    //animate lets go
    let newColor = new THREE.Color(`rgb(${rgb.join(",")})`)
    gsap.to(mesh.material.color, {
      r: newColor.r, 
      g: newColor.g, 
      b: newColor.b,
    }) 
  }
})