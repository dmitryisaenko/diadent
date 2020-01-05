document.addEventListener("DOMContentLoaded", function() {

	// Скрытие/отображение пунктов меню для моб. версии
    var $toggleButton = $('.toggle-button'),
		$navWrap = $('.nav-wrap');
		
		$toggleButton.on('click', function() {
            $(this).toggleClass('button-open');
            $navWrap.toggleClass(['menu-show', 'mobile']);
			$addonPhonesBlock.toggleClass('show-contact-item-md-addon');
		});

	//Show sub-menu item in mobile version
	// var $menuItemHasChildren = $('.menu-item-has-children');
	var $menuItemHasChildren = $('.sidebar-menu-arrow');
	$menuItemHasChildren.on('click', function() {
		if ($(window).width() <= 660) {
			$menuItemHasChildren.not(this).next('.sub-menu').hide(300);
			$(this).next('.sub-menu').toggle(300);
		}
	});

	//Show block with addon phones
	var $addonPhonesBtn = $('.fa-chevron-circle-down');
		// $addonPhonesBlock = $('.contact-item-md-addon');

		$addonPhonesBtn.on('click', function(){
			$('#modalCall').modal('show');
			// $addonPhonesBlock.toggleClass('show-contact-item-md-addon');
		});

	//Collapse main header to smaller height after scroll
	$(window).scroll(function() {
		if ( ( $(window).scrollTop() >= 100 ) && ($(window).width() > 991) ) {
			$('.contacts, .header-lang').css('display', 'none');
			$('.main-logo__img').addClass('main-logo__img_scroll');
			$('.contact-item-scroll').addClass('contact-item-scroll_show');
			$('.subheader').addClass('subheader_scroll').animate({'opacity':'1'},500);
		} else {
			$('.contacts, .header-lang').attr('style', ''); 
			$('.main-logo__img').removeClass('main-logo__img_scroll'); 
			$('.contact-item-scroll').removeClass('contact-item-scroll_show');
			$('.subheader').removeClass('subheader_scroll');
		}
	});


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
		if ($(this).scrollTop() > top_show) $('#back-top').fadeIn();
		else $('#back-top').fadeOut();
		});
		$('#back-top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
		/* Плавная прокрутка наверх */
		$('body, html').animate({
			scrollTop: 0
		}, delay);
		});
	});

});
