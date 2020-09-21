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


$('.works-slider').slick({
    slidesToShow: 1,
    dots: true,
    appendArrows: '.works-slider__nav',
    appendDots: '.works-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.signal-algorithms__slider').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    dots: true,
    fade: true,
    appendArrows: '.signal-algorithms__slider-nav',
    appendDots: '.signal-algorithms__slider-nav',
});

$('.indicators-slider').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    dots: true,
    fade: true,
    appendArrows: '.indicators-slider-nav',
    appendDots: '.indicators-slider-nav',
});

$('.main-history__content').click(function () {
    $(this).toggleClass('open').find('.main-history__info').slideToggle();
});


$('.playpause').click(function () {
    $('.video-wrapper').toggleClass('video-click');

    if($(".fullscreen-video").get(0).paused){
        $(".fullscreen-video").get(0).play();
        $(this).fadeOut();

    }else{
        $(".fullscreen-video").get(0).pause();

        $(this).fadeIn();
    }

});

// service
$('.service-content').each(function () {
    if ($(this).height() > 2430) {
        $(this).addClass('hidden');
        $(this).parents('.service-content__wrapper').append('<div class="btn-load"><span>Read more</span></div>');
    }
});

$('.btn-load').click(function () {
    $('.service-content').removeClass('hidden');
    $(this).fadeOut();
});

$('.btn-dropList').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('click').parents('.license-box').find('.license-box-footer').slideToggle();
});

$('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});

// animate number
var target = $('.benefits__inner');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem){
        $({ blurRadius: 5 }).animate(
            { blurRadius: 0 },
            {
                duration: 3500,
                easing: "swing",
            }
        );
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
            " "
        );
        $(".benefits__number").each(function () {
            var tcount = $(this).data("count");
            $(this).animateNumber(
                {
                    number: tcount,
                    easing: "easeInQuad",
                    numberStep: comma_separator_number_step
                },
                1000
            );
        });
    }
});




// timer
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);

