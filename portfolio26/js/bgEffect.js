var mouseX;
var mouseY;

//화면 생성
const scene = new THREE.Scene();

//카메라 설정
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 800;

//렌더링 설정
renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.getElementById("webgl-canvas"),
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

//Geometry
var distance = Math.min(200, window.innerWidth / 4);
var geometry = new THREE.Geometry();

for (var i = 0; i < 4800; i++) {
  var vertex = new THREE.Vector3();
  var theta = THREE.Math.randFloatSpread(360);
  var theta = Math.acos(THREE.Math.randFloatSpread(2));
  var phi = THREE.Math.randFloatSpread(360);

  vertex.x = distance * Math.sin(theta) * Math.cos(phi);
  vertex.y = distance * Math.sin(theta) * Math.sin(phi);
  vertex.z = distance * Math.cos(theta);

  geometry.vertices.push(vertex);
}

var particles = new THREE.Points(
  geometry,
  new THREE.PointsMaterial({ color: 0x0ff0f0, size: 4 })
);
particles.boundingSphere = 50;

var renderingParent = new THREE.Group();
renderingParent.add(particles);

var resizeContainer = new THREE.Group();
resizeContainer.add(renderingParent);
scene.add(resizeContainer);

//조명
const lightAmbient = new THREE.AmbientLight(0x663399, 1);
scene.add(lightAmbient);

//애니메이션 설정
function animate(a) {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}
animate();

//화면 사이즈 설정
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onWindowResize);
document.addEventListener("mousemove", onMouseMove, false);

//gsap
var myTween;
function onMouseMove(event) {
  if (myTween) myTween.kill();

  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  myTween = gsap.to(particles.rotation, {
    duration: 0.1,
    x: mouseY * -1,
    y: mouseX,
  });
  particles.rotation.x = mouseY * -1;
  particles.rotation.y = mouseX;
}
animate();

// Scaling animation
var animProps = { scale: 1, xRot: 0, yRot: 0 };
gsap.to(animProps, {
  duration: 5,
  scale: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine",
  onUpdate: function () {
    renderingParent.scale.set(
      animProps.scale,
      animProps.scale,
      animProps.scale
    );
  },
});

gsap.to(animProps, {
  duration: 60,
  xRot: Math.PI * 4,
  yRot: Math.PI * 8,
  repeat: -1,
  yoyo: true,
  ease: "none",
  onUpdate: function () {
    renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
  },
});

document.querySelector(".goBtn").addEventListener("click", () => {
  gsap.to(animProps, {
    duration: 5,
    delay: 2.5,
    scale: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine",
    onUpdate: function () {
      renderingParent.scale.set(
        animProps.scale,
        animProps.scale,
        animProps.scale
      );
    },
  });
});
