// "use strict";

function ibg(){

let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();

$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function(){
	$('.intro__slider').slick({
		arrows: true,				//Стрелки 
		dots: true,					//Точки 
		adaptiveHeight: false,		//Адаптив слайдов
		slidesToShow: 1,			//Кол во слайдов
		slidesToScroll: 1,			//Скролл слайдов
		speed: 1000,				//Скорость скролла
		easing:'linear',			//Анимация
		infinite: true,				//Бесконечный скролл
		initialSlide: 0,			//Старт слайдера
		autoplay: false,			//Авто слайдер
		autoplaySpeed: 3000,		//Скорость слайдера
		pauseOnFocus: true,			//Пауза авто слайдера при клике
		pauseOnHover: true,			//Пауза авто слайдера при наведении
		pauseOnDotsHover: true,		//Пауза авто слайдера при наведении на точки
		draggable: true,			//Запрет на свайп мышкой
		swipe: true,				//Запрет на свайп на сенсоре
		waitForAnimate: true,		//Быстрый скролл
		centerMode: false,			//Центрует слайд
		variableWidth: false,		//Все слайды в ряд
		rows: 1,					//Ряды слайдера
		slidesPerRow:1,				//Кол во слайдов в ряду
		vertical: false,			//Вертикальный слайдер
		responsive: [
	    {
	      breakpoint: 860,
	      	settings: {
	        	arrows: false
	      	}
	    },
	  ]
	});
});

$(document).ready(function() {
	$('.info__button').click(function(event){
		$('.contact__form,.body__clouse').addClass('active');
	});
	$('.body__clouse').click(function(event){
		$('.body__clouse,.contact__form').removeClass('active')
	})
});










