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
     Modales
  ======================= */
  function initModals() {
    const modalButtons = document.querySelectorAll("[data-modal-target]");
    const closeButtons = document.querySelectorAll(".modal-close");

    modalButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-modal-target");
        const modal = document.getElementById(target);
        if (modal) {
          modal.classList.add("opacity-100");
          modal.classList.remove("pointer-events-none");
        }
      });
    });

    closeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const modal = btn.closest(".fixed");
        modal.classList.remove("opacity-100");
        modal.classList.add("pointer-events-none");
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
  function initScrollFadeIn() {
    const sections = document.querySelectorAll("#sobre-mi, #skills");

    function fadeIn() {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.style.opacity = 1;
        }
      });
    }

    window.addEventListener("scroll", fadeIn);
    fadeIn();
  }

  /* =======================
     Inicialización
  ======================= */
  initMobileMenu();
  initScrollTop();
  initModals();
  initParticles();
  initScrollFadeIn();
});
