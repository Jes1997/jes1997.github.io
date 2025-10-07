document.addEventListener("DOMContentLoaded", () => {
  const skillIcons = document.querySelectorAll(".skills-icon");
  skillIcons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add("loaded");
    }, index * 150); // efecto escalonado
  });

  // Subtítulo animado tipo máquina de escribir
  const phrases = ["Desarrollador Web", "Laravel", "PHP", "Frontend & Backend"];
  let i = 0;
  let j = 0;
  let currentPhrase = '';
  let isDeleting = false;
  const speed = 100; // velocidad escritura

  function type() {
    const subtitle = document.getElementById("animated-subtitle");

    if (i >= phrases.length) i = 0;

    const fullPhrase = phrases[i];

    if (!isDeleting) {
      currentPhrase = fullPhrase.substring(0, j + 1);
      j++;
      subtitle.textContent = currentPhrase;
      if (currentPhrase === fullPhrase) {
        isDeleting = true;
        setTimeout(type, 1000); // pausa al terminar
        return;
      }
    } else {
      currentPhrase = fullPhrase.substring(0, j - 1);
      j--;
      subtitle.textContent = currentPhrase;
      if (currentPhrase === '') {
        isDeleting = false;
        i++;
      }
    }

    setTimeout(type, isDeleting ? speed / 2 : speed);
  }
  /* =======================
     Menú móvil
  ======================= */
function initMobileMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-btn");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });

  // Cerrar menú al hacer clic en cualquier enlace
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
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
    fullScreen: { enable: false }, // importante, no ocupa toda la pantalla
    particles: {
      number: { value: 60 }, // menos partículas
      color: { value: "#00ffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 2.5 },
      move: { enable: true, speed: 1, direction: "none" },
      links: { enable: true, distance: 100, color: "#00ffff", opacity: 0.2 },
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

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          if (entry.target.id === "proyectos") {
            projectCards.forEach((card, i) => {
              setTimeout(() => card.classList.add("visible"), i * 200);
            });
          }

          obs.unobserve(entry.target); // solo una vez
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeSections.forEach(section => observer.observe(section));
}
/* =======================
    Tooltips habilidades
======================= */
function initSkillsTooltips() {
  const skills = document.querySelectorAll(".skills-icon");

  skills.forEach(skill => {
    const tooltip = skill.querySelector(".tooltip");

    skill.addEventListener("mouseenter", () => {
      const rect = skill.getBoundingClientRect();
      const tooltipWidth = tooltip.offsetWidth;
      const tooltipHeight = tooltip.offsetHeight;

      // Calculamos posición centrada
      let left = rect.left + rect.width / 2 - tooltipWidth / 2;
      let top = rect.bottom + 8; // 8px de separación

      // Evitamos que se salga de la pantalla
      left = Math.max(8, Math.min(left, window.innerWidth - tooltipWidth - 8));
      top = Math.min(top, window.innerHeight - tooltipHeight - 8);

      tooltip.style.left = left + "px";
      tooltip.style.top = top + "px";
      tooltip.style.opacity = 1;
    });

    skill.addEventListener("mouseleave", () => {
      tooltip.style.opacity = 0;
    });
  });
}




  /* =======================
     Inicialización
  ======================= */
  initMobileMenu();
  initScrollTop();
  initModals();
  initParticles();
  initScrollAnimations();
  initSkillsTooltips();
  type();
});
