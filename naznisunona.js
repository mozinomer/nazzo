$('.sliderContainerBlackPanther').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	centerMode: false,
	responsive: [
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
	]
})
$('.sliderproducts').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	centerMode: false,
	responsive: [
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
	]
})
$('.rowsliderContainerBlog').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	centerMode: false,
	responsive: [
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
	]

});

$(window).scroll( function(e) {
	var scroll = $(window).scrollTop();   
	if (scroll > 100) {
		$('header').addClass('active');
	} else {
		$('header').removeClass('active');
	}
})

$('.hamburger').click( function(e) {
	$('.menuContainer').toggleClass('active');
	$(this).toggleClass('active');
});
$('.sliderCOntainerTestimonials').slick({
	slidesToShow: 1,
	dots: false,
	arrows: true,
	slidesToScroll: 1,
})
$('.minus').click(function () {
	var $input = $(this).parent().find('input');
	var count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.change();
	return false;
});
$('.plus').click(function () {
	var $input = $(this).parent().find('input');
	$input.val(parseInt($input.val()) + 1);
	$input.change();
	return false;
});
$('.slidersupplimentsContainer').slick({
	slidesToScroll: 1,
	slidesToShow: 1,
	dots: true,
	arrows: false
})