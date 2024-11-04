// Phone number
function showPhoneNumber(event) {
  if (!/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    event.preventDefault();
    alert("Phone Number: +33 (0) 6 03 26 80 70");
  }
  // On mobile devices, let the default action occur
}

// Main menu (index.html)
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".navbar .main-menu ul li a");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Supprimer la classe active de tous les éléments
      menuItems.forEach((link) => link.classList.remove("active"));

      // Ajouter la classe active à l'élément cliqué
      this.classList.add("active");
    });
  });
});

// Changer de page (index.html)
function showPage(pageId) {
  // Sélectionne toutes les sections de page et les masque
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("active-section");
  });

  // Affiche uniquement la section sélectionnée en ajoutant 'active-section'
  const targetSection = document.getElementById(pageId);
  if (targetSection) {
    targetSection.classList.add("active-section");
  }

  // Gère l'état actif des liens de la navbar
  const navLinks = document.querySelectorAll(".main-menu a");
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Cible et met en surbrillance le lien correspondant
  const activeLink = document.querySelector(
    `.main-menu a[href="#"][onclick="showPage('${pageId}')"]`
  );
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

// Mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});

// Ouvrir la page projet01.html au bon projet (index.html)
document.addEventListener("DOMContentLoaded", function () {
  // Get the URL parameter for the project
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("project");

  // Hide all project sections initially
  document.querySelectorAll(".project-section").forEach((section) => {
    section.classList.remove("active-project-section"); // Ensure all sections start as hidden
    section.style.display = "none"; // Hide all sections by default
  });

  // Display the correct project section if the parameter is found
  if (projectId) {
    const activeSection = document.getElementById(`project-${projectId}`);
    if (activeSection) {
      activeSection.classList.add("active-project-section"); // Add active class
      activeSection.style.display = "block"; // Show the section
    }
  }
});

// Carrousel
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const leftButton = document.querySelector(".carousel-button.left");
  const rightButton = document.querySelector(".carousel-button.right");

  // Obtenir toutes les cartes et calculer leur nombre total
  const cards = document.querySelectorAll(".carousel-track .work-card");
  const totalCards = cards.length;

  // Déterminer le nombre de cartes visibles (maximum 3)
  const visibleCards = Math.min(3, totalCards);
  const cardWidth = cards[0].offsetWidth + 40; // Inclure l'espace entre les cartes
  let currentIndex = 0;

  rightButton.addEventListener("click", () => {
    // Vérifier si la dernière carte est partiellement visible
    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
    } else if (currentIndex === totalCards - visibleCards) {
      // Si la dernière carte est entièrement visible, boucler au début
      currentIndex = 0;
    }
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  });

  leftButton.addEventListener("click", () => {
    // Si on est au début, boucler à la fin
    if (currentIndex === 0) {
      currentIndex = totalCards - visibleCards;
    } else {
      currentIndex--;
    }
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  });
});
