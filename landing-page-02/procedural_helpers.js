function createProceduralNoiseTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const imgData = ctx.createImageData(256, 256);
  const data = imgData.data;
  
  // Generate multi-octave smooth value noise
  const p = new Uint8Array(512);
  for (let i = 0; i < 256; i++) p[i] = p[i + 256] = Math.floor(Math.random() * 256);
  
  for (let y = 0; y < 256; y++) {
    for (let x = 0; x < 256; x++) {
      let val = 0;
      let freq = 1;
      let amp = 0.5;
      for (let o = 0; o < 3; o++) {
        const nx = (x * freq) % 256;
        const ny = (y * freq) % 256;
        val += (p[nx] ^ p[ny]) / 255 * amp;
        freq *= 2;
        amp *= 0.5;
      }
      const idx = (y * 256 + x) * 4;
      const c = Math.floor(val * 255);
      data[idx] = c;
      data[idx + 1] = c;
      data[idx + 2] = c;
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
  const texture = new CanvasTexture(canvas);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.minFilter = LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  return texture;
}

function createProceduralEnvTexture(renderer) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  
  // Studio background gradient
  const grad = ctx.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(0.3, '#ebeef1');
  grad.addColorStop(0.7, '#dfe5e9');
  grad.addColorStop(1, '#b6c1c8');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 256);
  
  // Softbox light accents
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.ellipse(150, 80, 80, 40, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(380, 90, 70, 35, 0, 0, Math.PI * 2);
  ctx.fill();

  const texture = new CanvasTexture(canvas);
  const pmrem = new PMREMGenerator(renderer);
  const envTex = pmrem.fromEquirectangular(texture).texture;
  texture.dispose();
  pmrem.dispose();
  return envTex;
}

async function createProceduralHeadMaps(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const w = 512;
      const h = 512;
      
      // Diffuse
      const cDiff = document.createElement('canvas');
      cDiff.width = w; cDiff.height = h;
      const ctxDiff = cDiff.getContext('2d');
      // Center crop portrait of driver
      ctxDiff.drawImage(img, 150, 40, 720, 680, 0, 0, w, h);

      // Clean background around head to eliminate any ghost text from crop
      const diffData = ctxDiff.getImageData(0, 0, w, h);
      for (let y = 0; y < 310; y++) {
        for (let x = 0; x < w; x++) {
          if (x < 145 || x > 385) {
            const idx = (y * w + x) * 4;
            diffData.data[idx] = 247;
            diffData.data[idx + 1] = 250;
            diffData.data[idx + 2] = 251;
            diffData.data[idx + 3] = 255;
          }
        }
      }
      ctxDiff.putImageData(diffData, 0, 0);

      const tDiff = new CanvasTexture(cDiff);
      tDiff.colorSpace = SRGBColorSpace;
      tDiff.minFilter = LinearMipmapLinearFilter;
      tDiff.generateMipmaps = true;

      // Depth Map (luminance + facial depth curve)
      const cDepth = document.createElement('canvas');
      cDepth.width = w; cDepth.height = h;
      const ctxDepth = cDepth.getContext('2d');
      const imgData = ctxDiff.getImageData(0, 0, w, h);
      const dData = ctxDepth.createImageData(w, h);
      for (let i = 0; i < imgData.data.length; i += 4) {
        const lum = (imgData.data[i] * 0.299 + imgData.data[i+1] * 0.587 + imgData.data[i+2] * 0.114) / 255;
        const x = (i / 4) % w;
        const y = Math.floor((i / 4) / w);
        const dist = 1 - Math.hypot(x - w/2, y - h/2.2) / (w * 0.6);
        let depthVal = Math.min(255, Math.max(0, Math.floor((lum * 0.4 + Math.max(0, dist) * 0.6) * 255)));
        if ((x < 145 || x > 385) && y < 310) {
          depthVal = 0;
        }
        dData.data[i] = depthVal;
        dData.data[i+1] = depthVal;
        dData.data[i+2] = depthVal;
        dData.data[i+3] = 255;
      }
      ctxDepth.putImageData(dData, 0, 0);
      const tDepth = new CanvasTexture(cDepth);
      tDepth.minFilter = LinearMipmapLinearFilter;
      tDepth.generateMipmaps = true;

      // Alpha Map (vignette cutout)
      const cAlpha = document.createElement('canvas');
      cAlpha.width = w; cAlpha.height = h;
      const ctxAlpha = cAlpha.getContext('2d');
      const aData = ctxAlpha.createImageData(w, h);
      for (let i = 0; i < aData.data.length; i += 4) {
        const x = (i / 4) % w;
        const y = Math.floor((i / 4) / w);
        const dist = Math.hypot((x - w/2) / (w*0.45), (y - h/1.8) / (h*0.5));
        let alpha = Math.min(255, Math.max(0, Math.floor((1 - Math.pow(dist, 4)) * 255)));
        if ((x < 145 || x > 385) && y < 310) {
          alpha = 0;
        }
        aData.data[i] = alpha;
        aData.data[i+1] = alpha;
        aData.data[i+2] = alpha;
        aData.data[i+3] = 255;
      }
      ctxAlpha.putImageData(aData, 0, 0);
      const tAlpha = new CanvasTexture(cAlpha);
      tAlpha.minFilter = LinearMipmapLinearFilter;
      tAlpha.generateMipmaps = true;

      // Normal Map (Sobel filter over depth)
      const cNorm = document.createElement('canvas');
      cNorm.width = w; cNorm.height = h;
      const ctxNorm = cNorm.getContext('2d');
      const nData = ctxNorm.createImageData(w, h);
      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const idx = (y * w + x) * 4;
          const left = dData.data[(y * w + (x - 1)) * 4];
          const right = dData.data[(y * w + (x + 1)) * 4];
          const up = dData.data[((y - 1) * w + x) * 4];
          const down = dData.data[((y + 1) * w + x) * 4];
          
          let dx = (right - left) / 255 * 2.0;
          let dy = (down - up) / 255 * 2.0;
          let dz = 1.0;
          const len = Math.hypot(dx, dy, dz) || 1;
          dx /= len; dy /= len; dz /= len;
          
          nData.data[idx] = Math.floor((dx * 0.5 + 0.5) * 255);
          nData.data[idx+1] = Math.floor((dy * 0.5 + 0.5) * 255);
          nData.data[idx+2] = Math.floor((dz * 0.5 + 0.5) * 255);
          nData.data[idx+3] = 255;
        }
      }
      ctxNorm.putImageData(nData, 0, 0);
      const tNorm = new CanvasTexture(cNorm);
      tNorm.minFilter = LinearMipmapLinearFilter;
      tNorm.generateMipmaps = true;

      resolve([tDiff, tDepth, tAlpha, tNorm]);
    };
    img.onerror = () => {
      // Emergency solid fallback
      const c = document.createElement('canvas');
      c.width = 64; c.height = 64;
      const t = new CanvasTexture(c);
      resolve([t, t, t, t]);
    };
    img.src = src;
  });
}

function createProceduralHelmet() {
  const group = new Group();
  
  // Main Dome Shell
  const domeGeo = new SphereGeometry(1.0, 36, 28, 0, Math.PI * 2, 0, Math.PI * 0.65);
  domeGeo.scale(1.0, 1.15, 1.25);
  const shellMat = new MeshStandardMaterial({
    color: new Color(0xd0d5da),
    metalness: 0.85,
    roughness: 0.22,
    envMapIntensity: 1.3,
    transparent: true,
    depthWrite: false,
    side: FrontSide
  });
  const dome = new Mesh(domeGeo, shellMat);
  dome.position.set(0, 0.1, -0.05);
  group.add(dome);

  // Aerodynamic Chin Bar / Jaw
  const jawGeo = new CylinderGeometry(0.96, 0.98, 0.55, 32, 1, false, Math.PI * 0.15, Math.PI * 0.7);
  jawGeo.scale(1.0, 1.0, 1.1);
  const jaw = new Mesh(jawGeo, shellMat.clone());
  jaw.position.set(0, -0.35, 0.15);
  group.add(jaw);

  // Visor Brim & Dark Glossy Visor
  const visorGeo = new CylinderGeometry(0.98, 0.98, 0.42, 32, 1, true, Math.PI * 0.2, Math.PI * 0.6);
  visorGeo.scale(1.02, 1.0, 1.18);
  const visorMat = new MeshStandardMaterial({
    color: new Color(0x111622),
    metalness: 0.95,
    roughness: 0.08,
    envMapIntensity: 1.5,
    transparent: true,
    depthWrite: false,
    side: FrontSide
  });
  const visor = new Mesh(visorGeo, visorMat);
  visor.position.set(0, -0.02, 0.16);
  group.add(visor);

  // Top Air Intake Scoop
  const scoopGeo = new BoxGeometry(0.35, 0.12, 0.6);
  const scoop = new Mesh(scoopGeo, shellMat.clone());
  scoop.position.set(0, 1.15, -0.1);
  group.add(scoop);

  // Aerodynamic Neck Rim
  const rimGeo = new TorusGeometry(0.95, 0.06, 12, 36);
  rimGeo.scale(1.0, 1.15, 1.0);
  rimGeo.rotateX(Math.PI / 2);
  const rim = new Mesh(rimGeo, shellMat.clone());
  rim.position.set(0, -0.65, 0);
  group.add(rim);

  return group;
}
