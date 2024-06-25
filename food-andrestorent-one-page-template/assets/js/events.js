/*
 jQuery;
 */

 "use strict";


 jQuery(document).ready(function ($) {
 
     $(window).load(function () {
         $(".loaded").fadeOut();
         $(".preloader").delay(1000).fadeOut("slow");
     });
 
     jQuery('.scrollup').click(function () {
         $("html, body").animate({scrollTop: 0}, 2000);
         return false;
     });
 
     jQuery('.nav a').bind('click', function () {
         $('html , body').stop().animate({
             scrollTop: $($(this).attr('href')).offset().top - 80
         }, 1500, 'easeInOutExpo');
         event.preventDefault();
     });
    })