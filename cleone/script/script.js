$('.sliderContainer').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    infinite: false,
    centerMode: false,
});
$('.ImagesContainerPost').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    centerMode: false,
    fade: true,
    asNavFor: '.sliderRightPostContainer'
});
$('.sliderRightPostContainer').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.ImagesContainerPost',
    dots: false,
    infinite: false,
    centerMode: false,
    focusOnSelect: false
});


$('.shopProductSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.shopProductSliderthumb',
    arrows: false
});
$('.shopProductSliderthumb').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.shopProductSlider',
    arrows: false,
    focusOnSelect: true
});
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
$('.hamburger').click( function(e) {
    $('.menuCOntainerBackflip').fadeIn().addClass('active')
});
$('.crosssed').click( function(e) {
     $('.menuCOntainerBackflip').removeClass('active');
     $('.menuCOntainerBackflip').fadeOut()
});
$('li.has-children a').click( function(e) {
    e.preventDefault();
    $(this).parent().find('ul.subMenu').addClass('active');
});
$('.closeThis').click( function(e) {
    $(this).parent().removeClass('active');
})





