$('.btn-burger').click(function () {
    $('.overlay').fadeIn();
    $('.mobile-menu').fadeIn();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});

$('.dropItem').click(function () {
    $(this).find('.dropDown-menu').fadeToggle();
});

$('.tooltip-wrapper').hover(function () {
   $(this).find('.tooltip-hidden').fadeToggle();
});