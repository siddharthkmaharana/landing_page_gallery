import fs from 'fs';
import path from 'path';

console.log("Starting clean build of index.html...");

const stripExports = (str) => str.replace(/export\s+(const|class|function|let|var|default)\s+/g, '$1 ');

let tierCode = stripExports(fs.readFileSync('tier_clean.js', 'utf8'));
let sceneCode = stripExports(fs.readFileSync('scene_patched.js', 'utf8'));
let mapVectorCode = stripExports(fs.readFileSync('map_vector_clean.js', 'utf8'));
let circuitPathCode = stripExports(fs.readFileSync('circuit_path_clean.js', 'utf8'));
let lapLogicCode = fs.readFileSync('lap_logic_clean.js', 'utf8');
const proceduralHelpers = fs.readFileSync('procedural_helpers.js', 'utf8');

// Filter out duplicate imports
sceneCode = sceneCode.replace(/import\s+[^;]+;/g, '');
tierCode = tierCode.replace(/import\s+[^;]+;/g, '');
mapVectorCode = mapVectorCode.replace(/import\s+[^;]+;/g, '');
circuitPathCode = circuitPathCode.replace(/import\s+[^;]+;/g, '');
lapLogicCode = lapLogicCode.replace(/^Verbatim:\s*/m, '');

// Read base64 image
const imgPath = path.resolve('hero-driver.png');
const imgBase64 = fs.existsSync(imgPath) ? fs.readFileSync(imgPath).toString('base64') : '';
const facePath = path.resolve('hero-driver-face.png');
const faceBase64 = fs.existsSync(facePath) ? fs.readFileSync(facePath).toString('base64') : '';

// Read template from generate.js
let template = fs.readFileSync('generate.js', 'utf8');
const startHtmlIdx = template.indexOf('<!DOCTYPE html>');
const endHtmlIdx = template.indexOf('// 6. HERO WEBGL SCENE');

let topHtml = template.substring(startHtmlIdx, endHtmlIdx);

// Remove duplicate readToken from sceneCode so the hoisted function in topHtml is used everywhere
sceneCode = sceneCode.replace(/const readToken = \(token\) => {[\s\S]*?return resolved;\s*};/, '// readToken defined at top of module');
topHtml = topHtml.replace(/\\`/g, '`').replace(/\\\$/g, '$');
topHtml = topHtml.replace('lenis = new Lenis({ smoothWheel: true });', 'lenis = new Lenis({ smoothWheel: true });\n    window.lenis = lenis;');

// Build complete script block
const scriptBody = `
    // De-structure THREE classes for verbatim scene code
    const {
      ACESFilmicToneMapping, Box3, BufferGeometry, Color, FrontSide, Group,
      LinearMipmapLinearFilter, Matrix4, Mesh, MeshStandardMaterial,
      PerspectiveCamera, PlaneGeometry, PMREMGenerator, RepeatWrapping,
      Scene, ShaderMaterial, SRGBColorSpace, Texture, TextureLoader,
      Vector2, Vector3, WebGLRenderer, CanvasTexture, SphereGeometry,
      CylinderGeometry, TorusGeometry, BoxGeometry
    } = THREE;

    // Palette & color interpolation for circuit
    const palette = {
      accent: [2, 210, 227],
      white: [255, 255, 255],
      bright: [141, 243, 250]
    };
    const mix = (c1, c2, t) => [
      c1[0] + (c2[0] - c1[0]) * t,
      c1[1] + (c2[1] - c1[1]) * t,
      c1[2] + (c2[2] - c1[2]) * t
    ];

    // Procedural helpers for 3D textures & fallback helmet
    ${proceduralHelpers}

    // Tier module
    ${tierCode}

    // Driver image source
    const DRIVER_IMAGE_SRC = "${imgBase64 ? 'data:image/png;base64,' + imgBase64 : './hero-driver.png'}";
    const DRIVER_FACE_SRC = "${faceBase64 ? 'data:image/png;base64,' + faceBase64 : './hero-driver-face.png'}";

    // HeroScene
    ${sceneCode}

    // Map vector data
    ${mapVectorCode}

    // Inject paths into SVG
    document.getElementById('svg-track-ribbon-base').setAttribute('d', TRACK_RIBBON);
    document.getElementById('svg-track-ribbon-lap').setAttribute('d', TRACK_RIBBON);
    document.getElementById('svg-lap-centreline').setAttribute('d', LAP_CENTRELINE);
    document.getElementById('svg-flag-diamonds').setAttribute('d', FLAG_DIAMONDS);

    // Circuit path (900 points)
    ${circuitPathCode}

    // Lap logic
    ${lapLogicCode}

    // ==========================================================================
    // 8. RADAR PING & DASHED AXES LOOP
    // ==========================================================================
    const radarPingEl = document.getElementById('radar-ping');
    let pingStartTime = null;

    subscribe((time) => {
      if (!pingStartTime) pingStartTime = time;
      const t = (time - pingStartTime) / 1000;
      const v = (t % 4.2) / 4.2;
      const r = 10.63 + v * 86;
      const opacity = 0.4 * Math.pow(1 - v, 2);
      if (radarPingEl) {
        radarPingEl.setAttribute('r', r);
        radarPingEl.setAttribute('opacity', opacity);
      }

      const dashOffset = (t % 7) / 7 * 20.5;
      const grids = ['grid-x1', 'grid-x2', 'grid-x3', 'grid-y1'];
      grids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.setAttribute('stroke-dashoffset', dashOffset);
      });
    });

    const globeMeridian = document.getElementById('globe-meridian');
    subscribe((time) => {
      const turn = (time / 10000) * 2 * Math.PI;
      const rx = Math.max(0.5, Math.abs(Math.cos(turn)) * 18);
      if (globeMeridian) globeMeridian.setAttribute('rx', rx);
    });

    // ==========================================================================
    // 9. HALFTONE DOT MATRIX & RETICLE
    // ==========================================================================
    const halftoneCanvas = document.getElementById('halftone-canvas');
    const halftoneCtx = halftoneCanvas.getContext('2d');
    const offscreenHalftone = document.createElement('canvas');
    offscreenHalftone.width = 2560;
    offscreenHalftone.height = 1440;
    const offscreenCtx = offscreenHalftone.getContext('2d');

    offscreenCtx.fillStyle = readToken('--map-dot');
    for (let y = 16.64; y < 1440; y += 7.7 * 2) {
      for (let x = 5.0; x < 2560; x += 7.8 * 2) {
        const distFromCenter = Math.hypot(x - 1280, y - 700);
        if (distFromCenter < 1100 && (Math.sin(x * 0.01) * Math.cos(y * 0.01) > -0.2)) {
          offscreenCtx.beginPath();
          offscreenCtx.arc(x, y, 1.75, 0, Math.PI * 2);
          offscreenCtx.fill();
        }
      }
    }

    let reticlePointer = { x: -9999, y: -9999, active: false };

    const circuitStageFrame = document.getElementById('circuit-stage-frame');
    circuitStageFrame.addEventListener('pointermove', (e) => {
      const rect = halftoneCanvas.getBoundingClientRect();
      const scaleX = 2560 / rect.width;
      const scaleY = 1440 / rect.height;
      reticlePointer.x = (e.clientX - rect.left) * scaleX;
      reticlePointer.y = (e.clientY - rect.top) * scaleY;
      reticlePointer.active = true;
    });

    circuitStageFrame.addEventListener('pointerleave', () => {
      reticlePointer.active = false;
    });

    function renderHalftone() {
      halftoneCtx.clearRect(0, 0, 2560, 1440);
      halftoneCtx.drawImage(offscreenHalftone, 0, 0);

      if (reticlePointer.active) {
        const { x, y } = reticlePointer;
        halftoneCtx.strokeStyle = 'rgba(77, 77, 77, 0.4)';
        halftoneCtx.lineWidth = 1.5;
        halftoneCtx.beginPath();
        halftoneCtx.moveTo(0, y);
        halftoneCtx.lineTo(2560, y);
        halftoneCtx.moveTo(x, 0);
        halftoneCtx.lineTo(x, 1440);
        halftoneCtx.stroke();

        const radius = 170;
        const startX = Math.max(0, x - radius);
        const endX = Math.min(2560, x + radius);
        const startY = Math.max(0, y - radius);
        const endY = Math.min(1440, y + radius);

        for (let py = startY; py < endY; py += 7.7 * 2) {
          for (let px = startX; px < endX; px += 7.8 * 2) {
            const d = Math.hypot(px - x, py - y);
            if (d < radius) {
              const grow = (1 - d / radius);
              const size = (0.7 + grow * 0.3) * 7.8;
              const isEven = (Math.round(px / 7.8) + Math.round(py / 7.7)) % 2 === 0;
              if (isEven) {
                halftoneCtx.fillStyle = readToken('--accent');
                halftoneCtx.fillRect(px - size / 2, py - size / 2, size, size);
              }
            }
          }
        }
      }
    }
    subscribe(() => renderHalftone(), () => 1000 / 30);

    // ==========================================================================
    // 10. CIRCUIT STAGE 6s LAP RUNNER
    // ==========================================================================
    const circuitCanvas = document.getElementById('circuit-trace-canvas');
    const circuitCtx = circuitCanvas.getContext('2d');
    let lapStartTime = null;
    let lapStarted = false;
    let lapProgress = 0;
    let lapHeat = 1;

    const lapMaskPath = document.getElementById('svg-lap-centreline');
    lapMaskPath.style.strokeDasharray = \`\${LAP_LENGTH + 60}\`;
    lapMaskPath.style.strokeDashoffset = \`\${LAP_LENGTH + 60}\`;

    function startLap() {
      if (lapStarted) return;
      lapStarted = true;
      lapStartTime = performance.now();
    }

    subscribe((time) => {
      if (!lapStarted) return;
      const elapsed = time - lapStartTime;
      lapProgress = Math.min(1, elapsed / LAP_MS);

      const dist = distanceAtTime(lapProgress);
      const reveal = 1 - dist / TOTAL;
      lapMaskPath.style.strokeDashoffset = \`\${60 + reveal * LAP_LENGTH}\`;

      if (lapProgress >= 1) {
        const coolElapsed = elapsed - LAP_MS;
        lapHeat = Math.max(0, 1 - coolElapsed / COOL_MS);
      }

      const points = trailUpTo(dist);
      circuitCtx.clearRect(0, 0, 1440, 800);

      if (points.length > 1) {
        drawTrail(circuitCtx, points, 1, 0.6, true, lapHeat);
        const [tx, ty] = points[points.length - 1];
        circuitCtx.save();
        circuitCtx.globalCompositeOperation = "lighter";
        const spark = circuitCtx.createRadialGradient(tx, ty, 0, tx, ty, LINE_WIDTH * 2.6);
        spark.addColorStop(0, rgba(palette.white, 0.85 * lapHeat));
        spark.addColorStop(0.35, rgba(palette.bright, 0.4 * lapHeat));
        spark.addColorStop(1, rgba(palette.accent, 0));
        circuitCtx.fillStyle = spark;
        circuitCtx.beginPath();
        circuitCtx.arc(tx, ty, LINE_WIDTH * 2.6, 0, Math.PI * 2);
        circuitCtx.fill();
        circuitCtx.restore();
      }

      circuitCtx.save();
      circuitCtx.translate(CUT_CENTRE[0], CUT_CENTRE[1]);
      circuitCtx.rotate((FLAG_CUT.angle * Math.PI) / 180);
      circuitCtx.clearRect(-CUT_ALONG / 2, -CUT_ACROSS / 2, CUT_ALONG, CUT_ACROSS);
      circuitCtx.restore();

      for (const marker of CIRCUIT_MARKERS) {
        if (dist < marker.d) continue;
        const age = Math.min(1, (dist - marker.d) / MARKER_POP_UNITS);
        const radius = 12 + (1 - age) * 14;
        const glow = circuitCtx.createRadialGradient(marker.x, marker.y, 0, marker.x, marker.y, radius);
        glow.addColorStop(0, rgba(palette.bright, 0.5 + 0.45 * (1 - age)));
        glow.addColorStop(0.45, rgba(palette.accent, 0.32));
        glow.addColorStop(1, rgba(palette.accent, 0));
        circuitCtx.save();
        circuitCtx.globalCompositeOperation = "lighter";
        circuitCtx.fillStyle = glow;
        circuitCtx.beginPath();
        circuitCtx.arc(marker.x, marker.y, radius, 0, Math.PI * 2);
        circuitCtx.fill();
        circuitCtx.restore();

        if (age < 1) {
          circuitCtx.strokeStyle = rgba(palette.bright, (1 - age) * 0.6);
          circuitCtx.lineWidth = 1;
          circuitCtx.beginPath();
          circuitCtx.arc(marker.x, marker.y, 9 + age * 20, 0, Math.PI * 2);
          circuitCtx.stroke();
        }
      }
    });

    const seasonObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startLap();
          seasonIntroReveal.play();
          document.getElementById('season-h2-dot').style.opacity = '1';
          document.getElementById('season-cyan-rule').style.transform = 'scaleX(1)';
          document.getElementById('season-cyan-rule').style.opacity = '1';
          document.getElementById('standings-plate').style.transform = 'translateY(0)';
          document.getElementById('standings-plate').style.opacity = '1';
        }
      });
    }, { threshold: 0.35 });
    seasonObserver.observe(seasonSection);

    // ==========================================================================
    // 11. CAREER TIMELINE TRACKER
    // ==========================================================================
    const timelineProgressBar = document.getElementById('timeline-progress-bar');
    const timelineSquareMarker = document.getElementById('timeline-square-marker');
    const timelineTrack = document.getElementById('timeline-track');

    function updateTimeline() {
      const rect = timelineTrack.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      const topOffset = rect.top - vh / 2;
      const progress = Math.min(1, Math.max(0, -topOffset / total));

      if (timelineProgressBar) {
        timelineProgressBar.style.height = \`\${progress * 100}%\`;
      }
      if (timelineSquareMarker) {
        timelineSquareMarker.style.top = \`\${progress * 100}%\`;
        timelineSquareMarker.style.transform = \`rotate(\${progress * 1800}deg)\`;
      }
    }
    window.addEventListener('scroll', updateTimeline, { passive: true });

    // ==========================================================================
    // 12. PADDOCK ROLLING CONTOUR CANVAS
    // ==========================================================================
    const paddockCanvas = document.getElementById('paddock-contour-canvas');
    const paddockCtx = paddockCanvas.getContext('2d');
    const footerCanvas = document.getElementById('footer-contour-canvas');
    const footerCtx = footerCanvas.getContext('2d');

    function resizeContourCanvases() {
      [paddockCanvas, footerCanvas].forEach(cnv => {
        if (!cnv) return;
        cnv.width = cnv.parentElement.clientWidth;
        cnv.height = cnv.parentElement.clientHeight;
      });
    }
    window.addEventListener('resize', resizeContourCanvases, { passive: true });
    resizeContourCanvases();

    function drawContourLines(ctx, width, height, time, colorStr) {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = colorStr;
      ctx.lineWidth = 1.4;
      const t = time * 0.0006;
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        const baseY = (height / 7) * (i + 1);
        ctx.moveTo(0, baseY);
        for (let x = 0; x <= width; x += 30) {
          const y = baseY + Math.sin(x * 0.003 + t + i) * 45 + Math.cos(x * 0.005 - t * 0.8) * 25;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }

    subscribe((time) => {
      if (paddockCanvas) {
        drawContourLines(paddockCtx, paddockCanvas.width, paddockCanvas.height, time, 'rgba(9, 10, 11, 0.07)');
      }
      if (footerCanvas) {
        drawContourLines(footerCtx, footerCanvas.width, footerCanvas.height, time, 'rgba(255, 255, 255, 0.08)');
      }
    }, () => 1000 / 30);

    // ==========================================================================
    // 13. LOADING VEIL & HERO SCENE LAUNCH
    // ==========================================================================
    const veilEl = document.getElementById('loading-veil');
    const veilProgressSvg = document.getElementById('veil-progress-svg');
    const veilMeterFill = document.getElementById('veil-meter-fill');
    const veilNameEl = document.getElementById('veil-name');

    let progressSpring = new Spring({
      ...SPRING_CONFIGS.PROGRESS_WAITING,
      from: 0,
      to: 0.7,
      onChange: (val) => {
        if (veilProgressSvg) veilProgressSvg.style.transform = \`scaleY(\${val})\`;
        if (veilMeterFill) veilMeterFill.style.transform = \`scaleX(\${val})\`;
      }
    });
    progressSpring.setTarget(0.7);

    setTimeout(() => {
      if (veilNameEl) {
        veilNameEl.style.transition = 'opacity 600ms ease, transform 600ms ease';
        veilNameEl.style.opacity = '1';
        veilNameEl.style.transform = 'translateY(0)';
      }
    }, 260);

    const heroCanvasEl = document.getElementById('hero-scene-canvas');
    const heroScene = new HeroScene(heroCanvasEl);
    window.heroScene = heroScene;
    heroScene.resize(window.innerWidth, window.innerHeight);

    window.addEventListener('resize', () => {
      heroScene.resize(window.innerWidth, window.innerHeight);
      heroScene.retune();
    }, { passive: true });

    window.addEventListener('pointermove', (e) => {
      const ndcX = (e.clientX / window.innerWidth) * 2 - 1;
      const ndcY = (e.clientY / window.innerHeight) * 2 - 1;
      heroScene.setPointer(ndcX, ndcY);
    });

    subscribe((time) => {
      progressSpring.update(0.016);
      heroNameReveal.update(0.016);
      seasonIntroReveal.update(0.016);
      heroScene.update(time);
    });

    heroScene.onReady = () => {
      progressSpring.tension = 170;
      progressSpring.friction = 26;
      progressSpring.setTarget(1.0);

      setTimeout(() => {
        veilProgressSvg.parentElement.style.transition = 'opacity 300ms ease, transform 300ms ease';
        veilProgressSvg.parentElement.style.opacity = '0';
        veilProgressSvg.parentElement.style.transform = 'translateY(-0.75rem)';
        veilMeterFill.parentElement.style.transition = 'opacity 300ms ease';
        veilMeterFill.parentElement.style.opacity = '0';
        veilNameEl.style.transition = 'opacity 300ms ease, transform 300ms ease';
        veilNameEl.style.opacity = '0';
        veilNameEl.style.transform = 'translateY(-0.75rem)';

        setTimeout(() => {
          veilEl.style.transition = 'opacity 700ms var(--ease-entrance)';
          veilEl.style.opacity = '0';
          veilEl.style.pointerEvents = 'none';

          heroScene.beginRise();
          heroNameReveal.play();

          document.getElementById('hero-masthead').style.transition = 'opacity 500ms ease';
          document.getElementById('hero-masthead').style.opacity = '1';

          setTimeout(() => {
            const panels = document.getElementById('hero-panels');
            if (panels) {
              panels.style.transition = 'opacity 600ms ease, transform 600ms ease';
              panels.style.opacity = '1';
              panels.style.transform = 'translateY(0)';
            }
          }, 900);

          setTimeout(() => {
            const actions = document.getElementById('hero-actions');
            if (actions) {
              actions.style.transition = 'opacity 600ms ease, transform 600ms ease';
              actions.style.opacity = '1';
              actions.style.transform = 'translateY(0)';
            }
          }, 1500);

          setTimeout(() => {
            veilEl.remove();
          }, 800);
        }, 670);
      }, 300);
    };

    const heroBurger = document.getElementById('hero-burger');
    const mobileSheet = document.getElementById('mobile-sheet');
    const sheetClose = document.getElementById('sheet-close');

    heroBurger.addEventListener('click', () => {
      mobileSheet.classList.add('open');
      mobileSheet.setAttribute('aria-hidden', 'false');
      if (lenis) lenis.stop();
      document.body.style.overflow = 'hidden';
    });

    const closeSheet = () => {
      mobileSheet.classList.remove('open');
      mobileSheet.setAttribute('aria-hidden', 'true');
      if (lenis) lenis.start();
      document.body.style.overflow = '';
    };

    sheetClose.addEventListener('click', closeSheet);
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileSheet.classList.contains('open')) closeSheet();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1280 && mobileSheet.classList.contains('open')) closeSheet();
    }, { passive: true });
`;

const finalIndexHtml = `${topHtml}
${scriptBody}
  </script>
</body>
</html>
`;

fs.writeFileSync('index.html', finalIndexHtml);
console.log("index.html fully written! Size:", fs.statSync('index.html').size);
