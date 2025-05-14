import {contactInfo} from "./modules/contact-info.js";
import {formCarousel} from "./modules/form-carousel.js";
import {hamburger} from "./modules/hamburger.js";

import {media} from "./modules/media.js";
import {footerInfo} from "./modules/footer-links.js";
import {vueForm} from "./modules/vue-form.js";

  
// shared
footerInfo();
hamburger();

formCarousel();
  media();



if (document.querySelector('#app')) {
  vueForm();
}
// home-only
if (document.body.dataset==='home') {
  contactInfo();
  
  
}
