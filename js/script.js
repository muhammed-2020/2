/*global $, alert, console*/ 

$(function (){

    'use stict';

    // Adjust Header height

    $('.header').height($(window).height());

    $(window).resize(function (){

        $('.header').height($(window).height());

        $('.slider').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.slider div').height() ) / 2);
        });

    });

        // Links Add Active class

        $('.links li a').click(function (){

            $(this).parent().addClass('active').siblings().removeClass('active');
        });
            //Trigger The Bx slider
        $('.slider').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.slider div').height() ) / 2)
        });

        $('.slider').bxSlider({
            pager: false
        });
       
        //Sooth Scroll To Div
        $('.links li a').click(function (){

            $('html, body').animate({

                scrollTop: $('#' + $(this).data('value')).offset().top

            }, 1000);
            
           // console.log('#' + $(this).data('value'));
            });

            //Our Auto slider Code

            (function autoSlider() {
                $('.slide .active').each(function (){
                    if (!$(this).is(':last-child')) {

                        $(this).delay(3000).fadeOut(1000, function () {

                            $(this).removeClass('active').next().addClass('active').fadeIn();

                            autoSlider();
                        });
                    } else {

                        $(this).delay(3000).fadeOut(1000, function () {

                            $(this).removeClass('active');

                            $('.slide div').eq(0).addClass('active').fadeIn();

                            autoSlider();
                        });
                    }

                    

                }); 


            }());

            //mixitup
            var mixer = mixitup('#container');


            $('.shuffle li').click(function (){

                $(this).addClass('selected').siblings().removeClass('selected');
            });



            //Nice scrol
            $("body").niceScroll({
                cursorcolor:"#1abc9c",
                cursorborder: "0",
                cursorborderradius: "2px",
                scrollspeed: 80,
            });

});