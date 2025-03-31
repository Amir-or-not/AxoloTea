document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("scene-container2");
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f8f8);
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(1, 1, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(300, 300);
    container.appendChild(renderer.domElement);
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 100, 10);
    scene.add(light);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("images/AxolV.png");
    const loader = new THREE.FBXLoader();
    loader.load("Minecraft_Axolotl.fbx", function (object) {
        console.log("✅ Модель загружена", object);
        object.scale.set(0.5, 0.5, 0.5); 
        object.position.set(0, -1, 0);
        scene.add(object);
        console.log("📌 Позиция модели:", object.position);
        object.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({ 
                    map: texture, 
                    transparent: true 
                });
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        camera.lookAt(object.position);
        function animate() {
            requestAnimationFrame(animate);
            object.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();
    }, undefined, function (error) {
        console.error("❌ Ошибка загрузки модели!", error);
    });
});
