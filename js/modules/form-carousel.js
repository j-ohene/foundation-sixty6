export function formCarousel() {

    const buttons = document.querySelectorAll(".form-button");
    const track = document.querySelector(".form-carousel-track");
    
    
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const index = parseInt(button.getAttribute("data-index"));
        const offset = -100 * index;
        track.style.transform = `translateX(${offset}vw)`;
    
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    
        console.log("Carousel script loaded");
      });
    });
}