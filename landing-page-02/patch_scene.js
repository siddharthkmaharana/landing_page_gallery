import fs from 'fs';

let scene = fs.readFileSync('scene_clean.js', 'utf8');

const sMarker = 'async load() {';
const sIdx = scene.indexOf(sMarker);

// Find the end of load() method - it ends right after onReady?.();\n    }
const eMarker = 'this.onReady?.();';
const eIdx = scene.indexOf(eMarker);
const eLineEnd = scene.indexOf('}', eIdx) + 1;

console.log('sIdx:', sIdx, 'eIdx:', eIdx, 'eLineEnd:', eLineEnd);

const replacement = `async load() {
        const textureLoader = new TextureLoader();
        const loadTexture = (file, srgb = false, forGltf = false) => new Promise((resolve, reject) => {
            textureLoader.load(\`\${ASSETS}/\${file}\`, (texture) => {
                if (srgb) texture.colorSpace = SRGBColorSpace;
                if (forGltf) texture.flipY = false;
                texture.minFilter = LinearMipmapLinearFilter;
                texture.generateMipmaps = true;
                resolve(texture);
            }, undefined, reject);
        });

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath("https://cdn.jsdelivr.net/npm/three@0.185.0/examples/jsm/libs/draco/gltf/");
        const gltfLoader = new GLTFLoader();
        gltfLoader.setDRACOLoader(dracoLoader);

        let env, headMaps, helmetGltf, noise;

        // 1. Noise Texture
        try {
            noise = await loadTexture("noise.webp");
        } catch (e) {
            noise = createProceduralNoiseTexture();
        }

        // 2. Studio Light Environment
        try {
            const rawEnv = await new RGBELoader().loadAsync(\`\${ASSETS}/studio-light.hdr\`);
            const pmrem = new PMREMGenerator(this.renderer);
            this.scene.environment = pmrem.fromEquirectangular(rawEnv).texture;
            rawEnv.dispose();
            pmrem.dispose();
        } catch (e) {
            this.scene.environment = createProceduralEnvTexture(this.renderer);
        }

        // 3. Head Maps
        try {
            headMaps = await Promise.all([
                loadTexture("person-diffuse.webp", true),
                loadTexture("person-depth.webp"),
                loadTexture("person-alpha.webp"),
                loadTexture("person-normal.webp"),
            ]);
        } catch (e) {
            headMaps = await createProceduralHeadMaps(DRIVER_IMAGE_SRC);
        }

        // 4. Helmet GLTF
        try {
            helmetGltf = await gltfLoader.loadAsync(\`\${ASSETS}/helmet3.glb\`);
        } catch (e) {
            helmetGltf = { scene: createProceduralHelmet() };
        }

        if (this.disposed) return;

        this.buildHead(headMaps[0], headMaps[1], headMaps[2], headMaps[3]);
        this.buildHelmet(helmetGltf.scene, noise);
        this.buildBackdrop(noise);

        this.reveal = 1;

        for (const texture of [...headMaps, noise, ...this.helmetTextures]) {
            if (texture) {
              try { this.renderer.initTexture(texture); } catch (e) {}
            }
        }
        try {
          await this.renderer.compileAsync(this.scene, this.camera);
        } catch (e) {}

        if (this.disposed) return;
        this.renderer.render(this.scene, this.camera);
        this.ready = true;
        this.onReady?.();
    }`;

scene = scene.substring(0, sIdx) + replacement + scene.substring(eLineEnd);
fs.writeFileSync('scene_patched.js', scene);
console.log('Successfully created scene_patched.js');
