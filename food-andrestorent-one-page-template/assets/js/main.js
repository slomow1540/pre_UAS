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

	var currindex = 0;
    displaySlides(currindex);

	function nexttestimony(n){
		displaySlides(currindex += n);
	}

	const leftImage = document.querySelector('.testimoni-text img:first-child');
	const rightImage = document.querySelector('.testimoni-text img:last-child');
	leftImage.addEventListener('click', function() {
		displaySlides(currindex -= 1)
	});

	rightImage.addEventListener('click', function() {
		displaySlides(currindex += 1)
	});


	// stuff for the swithing page

	var currPage =".HomeGroup";

	const HomeButton = document.querySelector('.TopBarHome');
	HomeButton.addEventListener('click', function() {
		displayPage(".HomeGroup",currPage)
		currPage = ".HomeGroup";
	});
	const MenuButton = document.querySelector('.TopBarMenu');
	MenuButton.addEventListener('click', function() {
		displayPage(".MenuGroup",currPage)
		currPage = ".MenuGroup";
	});
	const EventButton = document.querySelector('.TopBarEvent');
	EventButton.addEventListener('click', function() {
		displayPage(".EventGroup",currPage)
		currPage = ".EventGroup";
	});

	function displayPage(gotopage,currentpage){
		if (gotopage == currentpage){}
		else{
			const currentpageA = document.querySelector(currentpage);
			const pagewanttogo = document.querySelector(gotopage);
			currentpageA.classList.remove("activeA");
			currentpageA.classList.add("inactiveA");
			pagewanttogo.classList.remove("inactiveA");
			pagewanttogo.classList.add("activeA");
			
		}
		
	}


	// end of stuff for swithcing page
	
	function displaySlides(n) {
		var i;
		var slides = document.getElementsByClassName("contentlol");
		var current;
		
		for (i = 0; i < slides.length; i++) {
		  if (slides[i].style.display != "none") 
			  current = slides[i];
		}

		if (n > slides.length) {
			currindex = 1
		}
		if (n < 1) {
			currindex = slides.length
		}
		
		current.classList.remove("active");
		current.classList.add("inactive");
		
		setTimeout(() => {
		  for (i = 0; i < slides.length; i++) {
			slides[i].classList.remove("active", "inactive");
			slides[i].style.display = "none";
		  }
		
		  slides[currindex - 1].classList.remove("inactive");
		  slides[currindex - 1].style.display = "block";
		  slides[currindex - 1].classList.add("active");
		}, 500) // 1s is the animation hence we time out for 1000 mils 

	  }


	
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
        $("html, body").animate({ scrollTop: 0 }, 200);
        return false;
    }); 
 
 new WOW().init();

});
