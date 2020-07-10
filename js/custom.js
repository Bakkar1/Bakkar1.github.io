/*global $, alert, console */
$(function ()
{
    'use strict';
    $("body").niceScroll({
        cursorcolor: "#f7600e",
        cursorwidth: 8,
        //cursorborderradius: 0,
        cursorborder: '1px solid #f7600e'
    });
    //change header height
    $(
        function ()
        {
            $('header').height($(window).height()); //header = winodw height
        }
    );
    //scrool to features fro button
    $('header article div > span i').click( //ghir ndir click tkhdem l function
        function()
        {
            $('html, body').animate({ 
                scrollTop: $('.features').offset().top //html wl body ghadi ydar lih animation scrolltop ghadi yjib l feautures f top dyal scroll
                //offset().top hwa top dyal features
            }, 1000); //1000 = 1second transition
        }
    );
    //scroll to features from menu
    $('header nav  ul  li a.a1').click(
    function ()
    {
        $('html,body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    }
    );
    //scroll to sub from menu
    $('header nav  ul  li a.a2').click(
        function ()
        {
            $('html,body').animate({
                scrollTop: $('.sub').offset().top
            }, 1000);
        }
    );
    //scroll to sub our work menu
    $('header nav  ul  li a.a3').click(
        function ()
        {
            $('html,body').animate({
                scrollTop: $('.our').offset().top
            }, 1000);
        }
    );
    //scroll to client
    $('header nav  ul  li a.a4').click(
        function ()
        {
            $('html,body').animate({
                scrollTop: $('.client').offset().top
            }, 1000);
        }
    );
    //scroll to our team
    $('header nav  ul  li a.a5').click(
        function()
        {
            $('html,body').animate({
                scrollTop: $('.team').offset().top
            }, 1000);
        }
    );
    //scroll to contcat
    $('header nav  ul  li a.a6').click(
        function()
        {
            $('html,body').animate({
                scrollTop: $('.contact').offset().top
            }, 1000);
        }
    );
    $('.hire').click(
        function()
        {
            $('html,body').animate({
                scrollTop: $('.contact').offset().top
            }, 1000);
        }
    );
    //scroll to top
    $('.fa-chevron-up').click(
        function()
        {
            $('html,body').animate({
                scrollTop: $('nav').offset().top
            }, 1000);
        }
    );
    //shwo hidden items from our works
    $('.show-more').click(
        function()
        {
            $('article.our .hidden').fadeIn(1000); //fadeIn ybaynhom 1000 hiya 1s dyal transition
        }
    );

    //checkTestimonials 
    var leftArrow = $('i.fa-angle-left'),
        rightArrow = $('i.fa-angle-right');
    function checkclients()
    {
        if($('article.client section:first').hasClass('active')) //yla awal section 3andha class smito active
        {
            leftArrow.fadeOut();//7ayad hadik icone left
        }
        else
        {
            leftArrow.fadeIn(); //bayan hadik icone left
        }
        if($('article.client section:last').hasClass('active')) //yla awal section 3andha class smito active
        {
            rightArrow.fadeOut();//7ayad hadik icone left
        }
        else
        {
            rightArrow.fadeIn(); //bayan hadik icone left
        }
    }
    checkclients();
    $('article.client i').click( // onclick khadam l function
        function()
        {
            if($(this).hasClass('fa-angle-right')) //this hwa had l i || yla had l i 3ndo class
            {
                $('article.client .active').fadeOut(100, //fadeout khorjo mn hadik element (transition , wkhadam had l function)
                    function()
                    {
                        $(this).removeClass('active').next('section').addClass('active').fadeIn();
                        //w7ayad mn hadik section l class active w section li tab3to zidha class active abyanha
                        checkclients();
                        //bach kolo mara ydir check wach y7ayad l icone wala la
                    });
            }

            else //yla ma3ndoch class right ya3ni 3ando class left
            {
                $('article.client .active').fadeOut(100,
                    function()
                    {
                        $(this).removeClass('active').prev('section').addClass('active').fadeIn();
                        checkclients();
                    });
            }
        }
    );
});
