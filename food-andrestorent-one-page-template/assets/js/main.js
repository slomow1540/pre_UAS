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

	// Testimonial Section
	let customers = ["Clarinda Ardith", "Milo Carlton", "Kimber Leigh"];
	let texts = [
    "I am very impressed with the service provided by this restaurant. In addition to the delicious food, the staff is also friendly and helpful. Highly recommended!",
    "The dining experience at this restaurant is truly outstanding. Every dish has a unique and delightful flavor. I will definitely come back again!",
    "I recently discovered this hidden gem of a restaurant, and I am so glad I did! The flavors are bold and exciting, and the presentation is impeccable. I can't wait to bring my friends here to experience it for themselves."
	];

	let currentIndex = 0; 
	const testimonialText = document.querySelector('.testimoni-text p');
	const customerName = document.querySelector('.customer-name p');

	function displayTestimonial(index) {
		testimonialText.textContent = texts[index];
		customerName.textContent = customers[index];
	}

	displayTestimonial(currentIndex);

	const leftImage = document.querySelector('.testimoni-text img:first-child');
	const rightImage = document.querySelector('.testimoni-text img:last-child');

	leftImage.addEventListener('click', function() {
		currentIndex = (currentIndex == 0) ? (texts.length - 1) : (currentIndex - 1);
		displayTestimonial(currentIndex);
	});

	rightImage.addEventListener('click', function() {
		currentIndex = (currentIndex == texts.length - 1) ? 0 : (currentIndex + 1);
		displayTestimonial(currentIndex);
	});
	//End Testimonial Section
	
	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var height = 300;
	  //alert(batas);
	  
	  if (top > height) {
		jQuery('.navbar-fixed-top').addClass('menu-scroll');
	  } else {
	   jQuery('.navbar-fixed-top').removeClass('menu-scroll');
	  }
	});	
 // Scroll up 

    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    }); 
 
 new WOW().init();

});
