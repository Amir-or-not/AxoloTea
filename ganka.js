const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x74c1e8);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 5, 10);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const light = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(light);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
        directionalLight.position.set(5, 10, 10);
        scene.add(directionalLight);

        const textureLoader = new THREE.TextureLoader();

        const loader = new THREE.FBXLoader();
        loader.load('SK预览最终.fbx', function (object) {
            console.log("Модель загружена!", object);
            object.position.set(0, 0, 0);
            object.scale.set(0.01, 0.01, 0.01);
            scene.add(object);

            object.traverse((child) => {
                if (!child.isMesh) {
                    console.warn("Это не Mesh или у него нет материала:", child);
                    return;
                }

                let materials = child.material;
                if (Array.isArray(materials)) {
                    console.warn("Этот объект содержит массив материалов:", materials);
                    materials.forEach(mat => processMaterial(mat, child));
                } else {
                    processMaterial(materials, child);
                }
            });

            camera.lookAt(object.position);
        }, undefined, function (error) {
            console.error("Ошибка загрузки модели!", error);
        });

        function processMaterial(material, mesh) {
            if (!material || !material.name) {
                console.warn("У этого материала нет имени:", material);
                return;
            }

            const materialName = String(material.name).toLowerCase();
            console.log(`🔍 Обрабатывается материал: ${materialName}`);

            if (materialName.includes("body")) {
                material.map = textureLoader.load('images/体.png');
            } else if (materialName.includes("face")) {
                material.map = textureLoader.load('images/顔.png');
            } else if (materialName.includes("hair")) {
                material.map = textureLoader.load('images/髪.png');
            }

            material.transparent = false;
            material.opacity = 1;
            material.needsUpdate = true;
        }

        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        });