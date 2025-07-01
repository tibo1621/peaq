document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  // Désactiver la transition au chargement
  navbar.classList.add("no-transition");
  setTimeout(() => {
    navbar.classList.remove("no-transition");
  }, 50);

  // Détection page d'accueil
  const isHomePage = window.location.pathname.includes("index.html") 
    || window.location.pathname === "/" 
    || window.location.pathname === "/Peaquest/";

  // Ajouter classe body home ou non
  if (isHomePage) {
    body.classList.add("home");
  } else {
    body.classList.remove("home");
    // Sur autres pages, navbar scrolled (fond blanc + hamburger noir)
    navbar.classList.add("scrolled");
  }

  // Sur page accueil, gérer scroll
  if (isHomePage) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Gestion menu hamburger
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Accessibilité: toggle aria-expanded
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
  });

  // Fermer menu quand on clique sur un lien
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", false);
    });
  });

  // Souligner le lien actif dans la navbar
  const currentPath = window.location.pathname.split("/").pop(); // ex: "index.html"
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (href === "index.html" && (currentPath === "" || currentPath === "/"))) {
      link.style.textDecoration = "underline";
    }
  });
});
