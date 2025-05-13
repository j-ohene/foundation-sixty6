export function contactInfo() {


    const contactInfoUrl = 'http://localhost/foundation66/public/contactinfos';
    
    fetch(contactInfoUrl)
      .then((response) => response.json())
      .then((contactInfo) => {
    
        const addressElement = document.querySelector('.contact-item p:nth-child(2)');
        const phoneElement = document.querySelectorAll('.contact-item p:nth-child(2)')[1];
        const emailElement = document.querySelectorAll('.contact-item p:nth-child(2)')[2];
    
        // Update the contact information from the API response
        if (addressElement && contactInfo.address) {
          addressElement.textContent = contactInfo.address;
        }
    
        if (phoneElement && contactInfo.phone) {
          phoneElement.textContent = contactInfo.phone;
        }
    
        if (emailElement && contactInfo.email) {
          emailElement.textContent = contactInfo.email;
          emailElement.href = `mailto:${contactInfo.email}`; // Add a mailto link for the email
        }
      })
      .catch((error) => console.error('Error fetching contact info:', error));
    
    }