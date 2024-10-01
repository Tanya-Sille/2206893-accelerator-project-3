// import {Navigation, Pagination} from "swiper/modules";
import './modules/slider-promo.js';
import './modules/slider-programs.js';
import {openMainMenu, clickMenuLinks, clickSubMenuLinks} from './modules/menu.js';
import {setPromoBackground, setProgramsBackground} from './modules/set-backgrounds.js';
import {activateSelectContact, activateSelectModal} from './modules/form-select.js';
import {initPhoneMask} from './modules/phone-mask.js';
import {initModal} from './modules/modal.js';

openMainMenu();
clickMenuLinks();
clickSubMenuLinks();
setPromoBackground();
setProgramsBackground();
activateSelectContact();
activateSelectModal();
initPhoneMask();
initModal();
