// import {Navigation, Pagination} from "swiper/modules";
import './modules/slider-promo.js';
import {openMainMenu, clickMenuLinks, clickSubMenuLinks} from './modules/menu.js';
import {setPromoBackground} from './modules/promo-background.js';
import {activateSelectContact, activateSelectModal} from './modules/form-select.js';
import {initPhoneMask} from './modules/phone-mask.js';
import {initModal} from './modules/modal.js';

openMainMenu();
clickMenuLinks();
clickSubMenuLinks();
setPromoBackground();
activateSelectContact();
activateSelectModal();
initPhoneMask();
initModal();
