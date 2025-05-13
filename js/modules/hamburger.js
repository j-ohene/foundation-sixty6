export function hamburger() {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const closeButton = document.querySelector(".close-icon");
    const menuContainer = document.querySelector(".hamburger-menu");
  
    if (!hamburgerIcon || !closeButton || !menuContainer) return; // prevent errors on pages without the menu
  
    function toggleMenu() {
      menuContainer.classList.toggle("show");
    }
  
    hamburgerIcon.addEventListener("click", toggleMenu);
    closeButton.addEventListener("click", toggleMenu);
  
    document.querySelectorAll(".menu-item").forEach((item) => {
      item.addEventListener("click", function () {
        document.querySelectorAll(".menu-item").forEach((el) =>
          el.classList.remove("active")
        );
        this.classList.add("active");
        toggleMenu(); // closes menu after selecting
      });
    });
  }
  