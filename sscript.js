let scene, camera, renderer, sphereWireframe, sphereSolid;
const simplex = new SimplexNoise();

class Particle {
  constructor() {
    const geometry = new THREE.SphereGeometry(0.05, 6, 6);
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 1
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.2,
      (Math.random() - 0.5) * 0.2,
      (Math.random() - 0.5) * 0.2
    );
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 2.5;
    this.mesh.position.set(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius,
      (Math.random() - 0.5) * radius
    );
  }
  update() {
    this.mesh.position.add(this.velocity);
    const distance = this.mesh.position.length();
    if (distance > 3) {
      const normal = this.mesh.position.clone().normalize();
      this.velocity.reflect(normal);
      this.velocity.multiplyScalar(0.9);
      this.mesh.position.normalize().multiplyScalar(3);
    }
    this.velocity.y += (Math.random() - 0.5) * 0.01;
    this.velocity.x += (Math.random() - 0.5) * 0.01;
    this.velocity.z += (Math.random() - 0.5) * 0.01;
    this.velocity.clampLength(0, 0.2);
    this.mesh.scale.setScalar(0.5 + Math.sin(Date.now() * 0.005) * 0.5);
  }
}

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.IcosahedronGeometry(5, 3);
  const wireframeMaterial = new THREE.MeshPhongMaterial({
    color: 0xff00ff,
    emissive: 0x440044,
    specular: 0x00ffff,
    shininess: 100,
    wireframe: true,
    transparent: true,
    opacity: 0.5
  });
  const solidMaterial = new THREE.MeshPhongMaterial({
    color: 0xff00ff,
    emissive: 0x440044,
    specular: 0x00ffff,
    shininess: 100,
    transparent: true,
    opacity: 0.3
  });

  sphereWireframe = new THREE.Mesh(geometry, wireframeMaterial);
  sphereSolid = new THREE.Mesh(geometry.clone(), solidMaterial);
  scene.add(sphereWireframe);
  scene.add(sphereSolid);

  const particles = [];
  for (let i = 0; i < 40; i++) {
    const particle = new Particle();
    scene.add(particle.mesh);
    particles.push(particle);
  }

  const pointLights = [];
  const colors = [0xff00ff, 0x00ffff, 0xff0000, 0x0000ff];
  for (let i = 0; i < 4; i++) {
    const light = new THREE.PointLight(colors[i], 2, 50);
    light.position.set(
      Math.cos((i * Math.PI) / 2) * 15,
      Math.sin((i * Math.PI) / 2) * 15,
      Math.sin((i * Math.PI) / 2) * 15
    );
    scene.add(light);
    pointLights.push(light);
  }

  const ambientLight = new THREE.AmbientLight(0x222222);
  scene.add(ambientLight);

  camera.position.z = 15;

  const wireframePositions = sphereWireframe.geometry.attributes.position;
  const solidPositions = sphereSolid.geometry.attributes.position;
  const wireframeOriginalPositions = wireframePositions.array.slice();
  const solidOriginalPositions = solidPositions.array.slice();

  function animateVertices(time, positions, originalPositions) {
    const timeScale = time * 0.001;
    for (let i = 0; i < positions.count; i++) {
      const i3 = i * 3;
      const x = originalPositions[i3];
      const y = originalPositions[i3 + 1];
      const z = originalPositions[i3 + 2];
      const noise =
        simplex.noise4D(
          x * 0.1 + timeScale,
          y * 0.1 + timeScale,
          z * 0.1 + timeScale,
          timeScale * 0.5
        ) * 0.8;
      const pulseScale =
        Math.sin(timeScale * 2) * 0.2 + Math.cos(timeScale) * 0.1 + 1.2;
      positions.array[i3] = x * (1 + noise) * pulseScale;
      positions.array[i3 + 1] = y * (1 + noise) * pulseScale;
      positions.array[i3 + 2] = z * (1 + noise) * pulseScale;
    }
    positions.needsUpdate = true;
  }

  function animate() {
    requestAnimationFrame(animate);
    const time = performance.now();
    const rotationSpeed = 0.002;
    sphereWireframe.rotation.x += rotationSpeed;
    sphereWireframe.rotation.y += rotationSpeed * 1.5;
    sphereSolid.rotation.copy(sphereWireframe.rotation);
    particles.forEach((particle) => particle.update());
    animateVertices(time, wireframePositions, wireframeOriginalPositions);
    animateVertices(time, solidPositions, solidOriginalPositions);
    const hue = (Math.sin(time * 0.001) * 0.5 + 0.5) % 1;
    const saturation = Math.sin(time * 0.0005) * 0.2 + 0.8;
    wireframeMaterial.color.setHSL(hue, saturation, 0.5);
    wireframeMaterial.emissive.setHSL(hue, saturation, 0.3);
    solidMaterial.color.copy(wireframeMaterial.color);
    solidMaterial.emissive.copy(wireframeMaterial.emissive);
    pointLights.forEach((light, i) => {
      const angle = time * 0.001 + (i * Math.PI) / 2;
      light.position.x = Math.cos(angle) * 15;
      light.position.y = Math.sin(angle) * 15;
      light.position.z = Math.sin(angle * 2) * 15;
      light.intensity = 1.5 + Math.sin(time * 0.002 + i) * 0.5;
    });
    camera.position.z = 15 + Math.sin(time * 0.001) * 3;
    camera.position.y = Math.sin(time * 0.0005) * 2;
    camera.rotation.z = Math.sin(time * 0.0005) * 0.2;
    camera.rotation.x = Math.cos(time * 0.0003) * 0.1;
    renderer.render(scene, camera);
  }

  animate();
}

const debouncedResize = debounce(() => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}, 250);

window.addEventListener("resize", debouncedResize);

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

init();