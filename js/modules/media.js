export function media() {

    console.log('media function is running!');
  
  const mediaUrl = 'http://localhost/foundation66/public/media';
  let slideIndex = 0;
  let slides = [];
  let slideInterval;
  
  // Fetch dynamic content
  fetch(mediaUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((images) => {
      
      const carouselSlide = document.querySelector(".carousel-slide");
      const filteredCarouselImages = images.filter((image) => [1,2,3].includes(image.id));
  
      filteredCarouselImages.forEach((image) => {
        const slide = document.createElement("div");
        slide.classList.add("carousel-item");
        slide.innerHTML = `<img src="${image.image}" alt="${image.description || 'Slide'}" />`;
        carouselSlide.appendChild(slide);
      });
  
      // Update slides array and initialize carousel
      slides = document.querySelectorAll(".carousel-item");
      updateSlidePosition();
      startCarousel();
  
      // Populate "Our Cases" section dynamically (IDs 5–7)
      const caseIds = [5, 6, 7];
      caseIds.forEach((id) => {
        const caseCard = document.querySelector(`#card-${id}`);
        const caseData = images.find((image) => image.id === id);
  
        if (caseCard && caseData) {
          const caseImg = caseCard.querySelector('img');
          const caseTitle = caseCard.querySelector('h2');
  
          // Set image source and title
          caseImg.src = `${caseData.image}`;
          caseImg.alt = caseData.description || `Image for card ${id}`;
          caseTitle.textContent = caseData.description || '';
        } else if (caseCard) {
          console.warn(`No data found for card ID ${id}`);
        }
      });
      
         // Carousel Navigation Logic
         document.querySelector("#prevBtn").addEventListener("click", () => {
          moveSlide(-1);
          resetInterval();
        });
        
        document.querySelector("#nextBtn").addEventListener("click", () => {
          moveSlide(1);
          resetInterval();
        });
  
  
        function updateSlidePosition() {
          slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - slideIndex) * 100}%)`;
          });
        }
        
        function moveSlide(step) {
          const totalSlides = slides.length;
          slideIndex = (slideIndex + step + totalSlides) % totalSlides;
          updateSlidePosition();
        }
        
        function autoMoveSlide() {
          moveSlide(1);
        }
        
        function startCarousel() {
          slideInterval = setInterval(autoMoveSlide, 5000); // Set the interval for 5 seconds
        }
        
        function resetInterval() {
          clearInterval(slideInterval);
          startCarousel();
        }
        
      
  
      // Populate "Team Cards" section dynamically (IDs 9–12)
      const teamIds = [9, 10, 11, 12];
      teamIds.forEach((id) => {
        const teamCard = document.querySelector(`#team-card-${id}`);
        const teamData = images.find((image) => image.id === id);
  
        if (teamCard && teamData) {
          const teamImg = teamCard.querySelector('img');
          const teamDesc = teamCard.querySelector('.team-card-content p');
  
          // Set image source and description
          teamImg.src = `${teamData.image}`;
          teamImg.alt = teamData.description || `Image ID ${id}`;
          teamDesc.textContent = teamData.description || '';
        }
      });
    })
    .catch((error) => {
      console.error('Error fetching images:', error);
    });
  
   
  }