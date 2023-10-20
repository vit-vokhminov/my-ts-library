
//Ставим курсор в начало или конец инпута
$.fn.setCursorPosition = function(pos) {
    this.each(function(index, elem) {
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    });
    return this;
};

$(document)
    .on('click','.cursor-phone',function(e){
        $(this).setCursorPosition(4);                   //в начало
    })
    .on('touchend','.header_menu_mobile',function(){
        $(this).closest('.header_menu').find('.navigation').slideToggle();
    })
    .on('click', '.navigation a', function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    })
    .ready(function() {

        $(".phone-mask").mask("+7 (999) 999-99-99");

        //Скрытие элементов при клике мимо
        $(document).on("click touchend", function (e) {
            if($(window).width() <= 767) {
                if ($(e.target).closest(".header_main").length == 0) $('.navigation').slideUp();
            }
        });

        $('[data-fancybox]').fancybox({
            image : {
                protect: true
            }
        });

        $('.how_slider_for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            cssEase: 'linear',
            asNavFor: '.how_slider_nav',
            autoplay: 5000
        });

        $('.how_slider_nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            vertical:true,
            focusOnSelect: true,
            asNavFor: '.how_slider_for'
        });


        $('.gallery_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            infinite: true,
            swipe: false,
            prevArrow: $('.gallery_slider_bt_prev'),
            nextArrow: $('.gallery_slider_bt_next')
        });


        $('.reviews').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: true,
            prevArrow: $('.reviews_slider_bt_prev'),
            nextArrow: $('.reviews_slider_bt_next')
        });


        $(window).on('orientationchange resize load', function () {
            if($(window).width() <= 768){
                $('.navigation').css('display','none');
            }else if($(window).width() <= 991){
                $('.navigation').css('display','flex');
            }else{
                $('.navigation').css('display','block');
            }
        })




    });
