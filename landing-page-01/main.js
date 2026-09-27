(() => {
  // Mobile Menu Elements
  const burger = document.querySelector(".burger");
  const overlay = document.querySelector(".overlay");
  const menu = document.querySelector(".mobile-menu");
  const menuLinks = menu ? menu.querySelectorAll("a") : [];
  const headerWrapper = document.querySelector(".header-wrapper");

  const setMenu = (open) => {
    document.body.classList.toggle("menu-open", open);
    if (burger) {
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    if (overlay) overlay.hidden = !open;
    if (menu) menu.hidden = !open;
  };

  burger?.addEventListener("click", () => {
    setMenu(!document.body.classList.contains("menu-open"));
  });

  overlay?.addEventListener("click", () => setMenu(false));

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) setMenu(false);
  });

  // Header Scroll State
  window.addEventListener("scroll", () => {
    if (headerWrapper) {
      if (window.scrollY > 40) {
        headerWrapper.classList.add("scrolled");
      } else {
        headerWrapper.classList.remove("scrolled");
      }
    }
  });

  // Number Count-Up Animation
  const easeOutCubic = (t) => 1 - (1 - t) ** 3;

  const animateCount = (el, target, decimals, duration) => {
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      el.textContent = (target * easeOutCubic(t)).toFixed(decimals);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const counters = document.querySelectorAll("[data-count]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    counters.forEach((el) => {
      el.textContent = Number(el.dataset.count).toFixed(Number(el.dataset.decimals));
    });
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (el.dataset.done) return;
          el.dataset.done = "1";
          const i = Number(el.dataset.i || 0);
          const target = Number(el.dataset.count);
          const decimals = Number(el.dataset.decimals || 0);
          window.setTimeout(() => {
            animateCount(el, target, decimals, 1500 + i * 80);
          }, 480 + i * 90);
          io.unobserve(el);
        });
      },
      { threshold: 0.25 }
    );
    counters.forEach((el) => io.observe(el));
  }

  // Section 05 Live Metrics Count-Up
  const liveCounters = document.querySelectorAll(".live-counter");
  if (!reduceMotion && liveCounters.length) {
    const liveIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (el.dataset.done) return;
          el.dataset.done = "1";
          const target = parseFloat(el.dataset.target);
          const decimals = parseInt(el.dataset.decimals || "0", 10);
          animateCount(el, target, decimals, 1600);
          liveIO.unobserve(el);
        });
      },
      { threshold: 0.3 }
    );
    liveCounters.forEach((el) => liveIO.observe(el));
  }

  // Section 02 Architecture Interactive Steps
  const archCards = document.querySelectorAll(".arch-step-card");
  const archLabels = document.querySelectorAll(".arch-labels span");
  const disk = document.querySelector(".glow-disk");

  const layerTransforms = {
    perception: "rotate(-5deg) scale(1)",
    context: "rotate(-12deg) scale(1.08) translateY(-6px)",
    reasoning: "rotate(-2deg) scale(1.15) translateY(-10px)",
    execution: "rotate(4deg) scale(1.2) translateY(-14px)"
  };

  archCards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
      archCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      archLabels.forEach((lbl, i) => {
        lbl.classList.toggle("active", i === index);
      });
      const layer = card.dataset.layer;
      if (disk && layerTransforms[layer]) {
        disk.style.transform = layerTransforms[layer];
      }
    });
  });

  // Section 03 Dashboard Tab Switching
  const dashTabs = document.querySelectorAll(".dash-tab");
  const terminalView = document.getElementById("dash-terminal-view");
  const chartBars = document.querySelectorAll(".dash-chart .bar");

  const tabContents = {
    overview: {
      lead: "• Unified production runtime...",
      dim1: "context window: 2.4M active tokens",
      dim2: "reasoning engine: v4.2-active",
      dim3: "agent coordination: live",
      accent: "• Status: optimal",
      bars: [42, 58, 52, 76, 64, 92, 68, 48, 84, 60, 72, 50, 88, 66]
    },
    agents: {
      lead: "• Active Swarm: 18 autonomous agents",
      dim1: "consensus model: raft-quorum-v2",
      dim2: "agent dispatch latency: 12ms",
      dim3: "unassigned queue: 0 tasks",
      accent: "• Multi-agent mesh: synchronized",
      bars: [60, 75, 88, 92, 65, 80, 85, 90, 70, 82, 95, 68, 77, 85]
    },
    memory: {
      lead: "• Distributed vector memory graph",
      dim1: "indexed embeddings: 14.8M nodes",
      dim2: "cache hit ratio: 98.4%",
      dim3: "retrieval latency: 18ms",
      accent: "• Memory integrity: 100% verified",
      bars: [30, 45, 60, 40, 70, 55, 80, 65, 50, 75, 60, 85, 90, 70]
    },
    workflows: {
      lead: "• Deterministic pipeline execution",
      dim1: "active workflows: 24 running",
      dim2: "failure recovery: self-healing active",
      dim3: "throughput: 1,420 steps/sec",
      accent: "• Pipeline health: zero faults",
      bars: [55, 62, 70, 85, 90, 78, 65, 88, 92, 75, 68, 82, 89, 94]
    },
    security: {
      lead: "• Zero-trust enterprise isolation",
      dim1: "sandboxing: gVisor runtime",
      dim2: "audit logging: cryptographic tamper-proof",
      dim3: "role validation: continuous JWT auth",
      accent: "• Compliance: SOC2 Type II active",
      bars: [85, 88, 90, 85, 92, 95, 88, 90, 93, 89, 94, 91, 96, 92]
    }
  };

  dashTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      dashTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const key = tab.dataset.tab;
      const data = tabContents[key];
      if (data && terminalView) {
        terminalView.innerHTML = `
          <p class="term-lead">${data.lead}</p>
          <p class="term-dim">${data.dim1}</p>
          <p class="term-dim">${data.dim2}</p>
          <p class="term-dim">${data.dim3}</p>
          <p class="term-accent">${data.accent}</p>
        `;

        chartBars.forEach((bar, idx) => {
          if (data.bars[idx] !== undefined) {
            bar.style.setProperty("--h", `${data.bars[idx]}%`);
          }
        });
      }
    });
  });

  // Nav Pill Scrollspy for Active Section
  const sections = [
    { id: "home", link: document.querySelector('.nav-pill a[href="#home"]') },
    { id: "product", link: document.querySelector('.nav-pill a[href="#product"]') },
    { id: "case-studies", link: document.querySelector('.nav-pill a[href="#case-studies"]') },
    { id: "contact", link: document.querySelector('.nav-pill a[href="#contact"]') }
  ];

  const updateScrollspy = () => {
    const scrollPos = window.scrollY + 200;
    let current = "home";

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        current = id;
      }
    });

    sections.forEach(({ id, link }) => {
      if (link) {
        link.classList.toggle("active", id === current);
      }
    });
  };

  window.addEventListener("scroll", updateScrollspy, { passive: true });
})();
