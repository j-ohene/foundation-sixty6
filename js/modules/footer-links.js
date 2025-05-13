export function footerInfo() {


    const apiUrl = 'http://localhost/foundation66/public/links';

  // Fetch data from the API
  fetch(apiUrl)
  .then(response => response.json())
  .then(footerLinks => {
    // Filter the links into two sets
    const filteredLinks = footerLinks.filter(link => link.id >= 1 && link.id <= 6);
    const secondFilteredLinks = footerLinks.filter(link => link.id >= 7 && link.id <= 11);

    // Select the containers for each set of links
    const firstColumn = document.querySelector('.footer-nav .footer-nav1');
    const secondColumn = document.querySelector('.footer-nav .footer-nav2');

    // Add the first set of links to the first column
    filteredLinks.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.textContent = link.site_label;
      firstColumn.appendChild(anchor);
    });

    // Add the second set of links to the second column
    secondFilteredLinks.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.textContent = link.site_label;
      secondColumn.appendChild(anchor);
    });

    
    const imageLinks = footerLinks.filter(link => link.id >= 12 && link.id <= 16); 

    
    const footerNav = document.querySelector('.footer-nav .footer-pics');

    
    footerNav.querySelectorAll('a').forEach(anchor => anchor.remove());

   
    imageLinks.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.url;

      const img = document.createElement('img');
      img.src = link.site_label; 
      img.alt = link.site_label.split('/').pop().split('.')[0]; 

      anchor.appendChild(img);
      footerNav.appendChild(anchor);
    });
  })
    .catch((error) =>  console.error('Error fetching footer links:', error));
}

footerInfo();