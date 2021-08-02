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

$(document).mouseup(function (e) { // событие клика по веб-документу
    let div = $(".dropItem"); // тут указываем ID элемента
    if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.find('.dropDown-menu').fadeOut(); // скрываем его
    }
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

$('.tools-slider').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    dots: true,
    fade: true,
    appendArrows: '.tools-slider-nav',
    appendDots: '.tools-slider-nav',
});

$('.binary-slider').slick({
    slidesToShow: 1,
    dots: true,
    appendArrows: '.binary-slider-nav',
    appendDots: '.binary-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

$('.reviews-cripto-slider').slick({
    slidesToShow: 4,
    dots: true,
    appendArrows: '.reviews-cripto-slider-nav',
    appendDots: '.reviews-cripto-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left-new"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right-new"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});

$('.best-forex-slider').slick({
    slidesToShow: 1,
    dots: true,
    variableWidth: true,
    centerMode: true,
    appendArrows: '.best-forex-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                centerMode: false,
                fade: true,
                appendDots: '.best-forex-slider__nav',
            }
        }

    ]
});

$('.main-history__content').click(function () {
    $(this).toggleClass('open').find('.main-history__info').slideToggle();
});


$('.playpause').click(function () {
    $('.video-wrapper').toggleClass('video-click');

    if ($(".fullscreen-video").get(0).paused) {
        $(".fullscreen-video").get(0).play();
        $(this).fadeOut();

    } else {
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


// click tab = visible block
$(".js-tab-trigger").on("click", function () {
    let id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="' + id + '"]');

    $('.js-tab-trigger.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});


$('.label-radio-variable').on('click', function () {
   $('.label-radio-variable').removeClass('active');
   $(this).addClass('active');
});

// function get_name_browser(){
//     // получаем данные userAgent
//     var ua = navigator.userAgent;
//     // с помощью регулярок проверяем наличие текста,
//     // соответствующие тому или иному браузеру
//     if (ua.search(/Chrome/) > 0) {
//         $('.navigation-box3').css('display', 'flex');
//         $('.navigation-box1').css('display', 'none');
//     }
//     // if (ua.search(/Firefox/) > 0) return 'Firefox';
//     if (ua.search(/Opera/) > 0) {
//         $('.navigation-box3').css('display', 'none');
//         $('.navigation-box1').css('display', 'flex');
//     }
//     // if (ua.search(/Safari/) > 0) return 'Safari';
//     // if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
//     // условий может быть и больше.
//     // сейчас сделаны проверки только
//     // для популярных браузеров
//     // return 'Не определен';
// }
//
// get_name_browser();

if (navigator.userAgent.search(/Chrome/) > 0) {
    $('.navigation-box3').css('display', 'flex');
    $('.navigation-box1').css('display', 'none');
}

if (navigator.userAgent.search(/OPR/) > 0) {
    $('.navigation-box3').css('display', 'none');
    $('.navigation-box1').css({
        display: 'flex',
        right: '35px'
    });
    $('#modalDownload .close').css({
        right: 'auto',
        left: '54px'
    })
}

if (navigator.userAgent.search(/Firefox/) > 0) {
    $('.navigation-box1').css({
        right: '195px'
    });
}

// canvas animate
(function () {
    var width,
        height,
        largeHeader,
        canvas,
        ctx,
        points,
        target,
        animateHeader = true;

    // Main
    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = { x: width / 2, y: height / 2 };

        largeHeader = document.getElementById("large-header");
        largeHeader.style.height = height + "px";

        canvas = document.getElementById("demo-canvas");
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");

        // create points
        points = [];
        for (var x = 0; x < width; x = x + width / 20) {
            for (var y = 0; y < height; y = y + height / 20) {
                var px = x + (Math.random() * width) / 20;
                var py = y + (Math.random() * height) / 20;
                var p = { x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // for each point find the 5 closest points
        for (var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for (var j = 0; j < points.length; j++) {
                var p2 = points[j];
                if (!(p1 == p2)) {
                    var placed = false;
                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for (var i in points) {
            var c = new Circle(
                points[i],
                2 + Math.random() * 2,
                "rgba(255,255,255,0.3)"
            );
            points[i].circle = c;
        }
    }

    // Event handling
    function addListeners() {
        if (!("ontouchstart" in window)) {
            window.addEventListener("mousemove", mouseMove);
        }
        window.addEventListener("scroll", scrollCheck);
        window.addEventListener("resize", resize);
    }

    function mouseMove(e) {
        var posx = (posy = 0);
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx =
                e.clientX +
                document.body.scrollLeft +
                document.documentElement.scrollLeft;
            posy =
                e.clientY +
                document.body.scrollTop +
                document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
    }

    function scrollCheck() {
        if (document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height + "px";
        canvas.width = width;
        canvas.height = height;
    }

    // animation
    function initAnimation() {
        animate();
        for (var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if (animateHeader) {
            ctx.clearRect(0, 0, width, height);
            for (var i in points) {
                // detect points in range
                if (Math.abs(getDistance(target, points[i])) < 4000) {
                    points[i].active = 0.3;
                    points[i].circle.active = 0.6;
                } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;
                } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                    points[i].active = 0.02;
                    points[i].circle.active = 0.1;
                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0;
                }

                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
        TweenLite.to(p, 1 + 1 * Math.random(), {
            x: p.originX - 50 + Math.random() * 100,
            y: p.originY - 50 + Math.random() * 100,
            ease: Circ.easeInOut,
            onComplete: function () {
                shiftPoint(p);
            }
        });
    }

    // Canvas manipulation
    function drawLines(p) {
        if (!p.active) return;
        for (var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
            ctx.stroke();
        }
    }

    function Circle(pos, rad, color) {
        var _this = this;

        // constructor
        (function () {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function () {
            if (!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = "rgba(156,217,249," + _this.active + ")";
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
})();

// canvas and



// animate number
var target = $('.benefits__inner');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
        $({blurRadius: 5}).animate(
            {blurRadius: 0},
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




