document.addEventListener("DOMContentLoaded", () => {
  /* =======================
     Menú móvil
  ======================= */
  function initMobileMenu() {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeBtn = document.getElementById("close-btn");

    function closeMenu() {
      mobileMenu.classList.add("bouncing-close");
      mobileMenu.addEventListener(
        "animationend",
        () => mobileMenu.classList.remove("open", "bouncing-close"),
        { once: true }
      );
    }

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("open");
      mobileMenu.classList.remove("bouncing-close");
    });

    closeBtn.addEventListener("click", closeMenu);

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  /* =======================
     Scroll top button
  ======================= */
  function initScrollTop() {
    const scrollBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

/* =======================
   Modales con slide + fade
======================= */
function initModals() {
  const modals = document.querySelectorAll(".modal-neon");
  const modalButtons = document.querySelectorAll("[data-modal-target]");

  modalButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.modalTarget);
      if (target) target.classList.add("show");
    });
  });

  modals.forEach(modal => {
    modal.querySelector(".modal-close-neon").addEventListener("click", () => {
      modal.classList.remove("show");
    });
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.classList.remove("show");
    });
  });
}

  /* =======================
     tsParticles
  ======================= */
  function initParticles() {
    tsParticles.load("tsparticles", {
      fullScreen: { enable: false },
      particles: {
        number: { value: 80 },
        color: { value: "#00ffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { enable: true, speed: 1, direction: "none" },
        links: { enable: true, distance: 120, color: "#00ffff", opacity: 0.3 },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
      },
    });
  }

/* =======================
   Fade-in secciones
======================= */
function initScrollAnimations() {
  const fadeSections = document.querySelectorAll(".fade-section");
  const projectCards = document.querySelectorAll(".project-card");

  function fadeIn() {
    fadeSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("visible");

        // Si es proyectos, aplicamos stagger a las cards
        if (section.id === "proyectos") {
          projectCards.forEach((card, i) => {
            setTimeout(() => card.classList.add("visible"), i * 200);
          });
        }
      }
    });
  }

  window.addEventListener("scroll", fadeIn);
  fadeIn(); // al cargar
}

  /* =======================
     Inicialización
  ======================= */
  initMobileMenu();
  initScrollTop();
  initModals();
  initParticles();
  initScrollAnimations();
});
