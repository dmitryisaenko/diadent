document.addEventListener("DOMContentLoaded", function() {

	// Скрытие/отображение пунктов меню для моб. версии
    var $toggleButton = $('.toggle-button'),
		$navWrap = $('.nav-wrap');
		
		$toggleButton.on('click', function() {
            $(this).toggleClass('button-open');
            $navWrap.toggleClass(['menu-show', 'mobile']);
			// $addonPhonesBlock.toggleClass('show-contact-item-md-addon');
			$('body').toggleClass('overflow_hidden');
		});

	//Show sub-menu item in mobile version
	var $sidebarMenuArrow = $('.sidebar-menu-arrow');
	$sidebarMenuArrow.on('click', function() {
		if ($(window).width() <= 660) {
			$sidebarMenuArrow.not(this).next('.sub-menu').hide(300);
			$(this).next('.sub-menu').toggle(300);
		}
	});
	//Show modal window with addon phones
	var $addonPhonesBtn = $('.fa-chevron-circle-down');
	$addonPhonesBtn.on('click', function(){
		$('#modalCall').modal('show');
	});
	
	//Show modal window with call request
	var $requestCallBtn = $('.request-call');
	$requestCallBtn.on('click', function(){
		$('#modalCallRequest').modal('show');
	});
	
	//Show modal window with appointment request
	var $requestAppBtn = $('.request-appointment');
	$requestAppBtn.on('click', function(){
		$('#modalAppointment').modal('show');
	});

	//Show modal window with question request
	var $requestQuestBtn = $('.request-question');
	$requestQuestBtn.on('click', function(){
		$('#modalQuestion').modal('show');
	});
		
	//Collapse main header to smaller height after scroll
	$(window).scroll(function() {
		if ( ( $(window).scrollTop() >= 100 ) && ($(window).width() > 991) ) {
			$('.contacts, .header-lang').css('display', 'none');
			$('.main-logo__img').addClass('main-logo__img_scroll');
			$('.contact-item-scroll').addClass('contact-item-scroll_show');
			$('.subheader-btn').addClass('subheader-btn_show');
			$('.subheader').addClass('subheader_scroll');
		} else {
			$('.contacts, .header-lang').attr('style', ''); 
			$('.main-logo__img').removeClass('main-logo__img_scroll'); 
			$('.contact-item-scroll').removeClass('contact-item-scroll_show');
			$('.subheader-btn').removeClass('subheader-btn_show');
			$('.subheader').removeClass('subheader_scroll');
		}
	});

	if ($(window).width() <= 991) $('.contact-item-scroll').removeClass('contact-item-scroll_show');


	// Плавный переход между разделами сайта при клике на пункты меню
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});


	
	// Кнопка "Наверх" с появлением
	var top_show = 550; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
	var delay = 1000; // Задержка прокрутки
	$(document).ready(function() {
		$(window).scroll(function () { // При прокрутке попадаем в эту функцию
		/* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
		if ($(this).scrollTop() > top_show) $('#back-top111').fadeIn();
		else $('#back-top111').fadeOut();
		});
		$('#back-top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
		/* Плавная прокрутка наверх */
		$('body, html').animate({
			scrollTop: 0
		}, delay);
		});
	});

});
