import * as flsFunctions from "./modules/functions.js";
import './bootstrap.bundle.min.js';
import './components.js';

flsFunctions.isWebp();

// Подключение свайпера
import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs]);

// Инициализация слайдера INTRO
const introslide = new Swiper('.intro__slider', { // ищем слайдер по селектору
	// задаем параметры
	slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 0, // расстояние между слайдами
	// mousewheel: true, // можно прокручивать изображения колёсиком мыши
	// grabCursor: true, // менять иконку курсора
  pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

// Инициализация слайдера REVIEWS
const sliderReviews = document.querySelector('.reviews__slider');
let mySwiperReviews = new Swiper(sliderReviews, { 
	slidesPerView: 3, 	
	centeredSlides: true,
	loop: true,
	navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },
	breakpoints: {  
		0: {
			slidesPerView: 1,
			spaceBetween: 75,  
		},  
		576: {
			slidesPerView: 1,
			spaceBetween: 75,  
		},  
		768: {
			slidesPerView: 2,
			spaceBetween: 30,  
		},     
		992: {
			slidesPerView: 2,
			spaceBetween: 63,  
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 100, 	
		}
	}
});

// Инициализация слайдера NEWS
const sliderNews = document.querySelector('.news__slider');
let mySwiperNews = new Swiper(sliderNews, { 
	slidesPerView: 3, 
	spaceBetween: 140, 
	centeredSlides: true,
	loop: true,
  navigation: {
    nextEl: '.news-button-next',
    prevEl: '.news-button-prev',
  },
	breakpoints: {  
	0: {
		slidesPerView: 1,
		spaceBetween: 75,  
	},  
	576: {
		slidesPerView: 1,
		spaceBetween: 75,  
	},  
	768: {
		slidesPerView: 2,
		spaceBetween: 75,  
	},     
	992: {
	  slidesPerView: 2,
	  spaceBetween: 105,  
	},
	1200: {
		slidesPerView: 3,
		spaceBetween: 140, 	
		}
	}
});


// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('#overlay');
const btn_close = document.querySelector('.header__menu-burger-close');
const bodyEl = document.querySelector('body');
const toggleMenu = function() {
	menu.classList.toggle('open');	
}
btnMenu.addEventListener('click', function(e) {
	e.stopPropagation();
	toggleMenu();		
	bodyEl.style.overflow="hidden";
});	
btn_close.addEventListener('click', function() {
	menu.classList.toggle('open');
	bodyEl.style.overflow="unset";
});

// Menu show
document.addEventListener('click', function(e) {
	const target = e.target;
	const its_menu = target == menu || menu.contains(target);	
	// const its_sidebar = target == sidebarEl || sidebarEl.contains(target);
	const menu_is_active = menu.classList.contains('open');
	// const sidebar_is_active = sidebarEl.classList.contains('active');
	if (!its_menu && menu_is_active) {
			toggleMenu();
			bodyEl.style.overflow="unset";
		}
});