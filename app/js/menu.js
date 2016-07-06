
$(document).ready(function(){

	var menu = function(){
		$('.nav__item').find('.nav__list').addClass('collapse');
		$('.nav__item').find('.nav__list').parent().addClass('mlayed');
		$('.nav__icon').click(function(){
			$('.nav__list').slideToggle();
			$('.collapse').hide();
		})
		if ($(window).width()<=1240){
			$('.nav__item').find('.collapse').parent().click(function(e){
			e.preventDefault();
			$(this).find('.collapse').slideToggle();
			$(this).parent().toggleClass('open');
			if ($(this).find('.collapse')===$('.open').find('.collapse')){
				$('.open').find('.collapse').slideToggle();
				$('.open').removeClass('open');
			}
		})
		}
	};

	menu();

	$(window).resize(function(){
		if ($(window).width()>1240){
			$('.nav__list').show();
			$('.nav__item').find('.nav__list').hide();
		} else {
			//$('.page-nav__list').hide();
		}
	})
})