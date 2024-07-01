/*
 jQuery;
 */

"use strict";
//menu item [name,image source, price,category,curritem count(no change please)]
const categories=["Drinks","Main Courses","Desserts"]
const menuitems=[
	["BerryBlissSmoothie","berry",6.75,"Drinks",0],
	["TropicalSunsetCocktail","tropicalSunset",10.00,"Drinks",0],
	["MatchaMadnessLatte","matchaMadnessLatte",5.75,"Drinks",0],
	["CitrusSplashRefresher","citrusSplashRefresher",6.00,"Drinks",0],
	["MatchaMadnessLatte","mintyMojito",9.00,"Drinks",0],
	["SpaghettiCarbonara","spaghettiCarbonara",6.75,"MainCourses",0],
	["GrilledChickenBreast","grilledChickenBreast",14.00,"MainCourses",0],
	["BeefSteak","beefSteak",18.00,"MainCourses",0],
	["Pan-SearedSalmon","grilledChickenBreast",16.50,"MainCourses",0],
	["VegetableStir-Fry","vegetableStirFry",11.00,"MainCourses",0],
	["ChocolateLavaCake","lavacake",6.50,"Desserts",0],
	["Tiramisu","tiramisu",5.00,"Desserts",0],
	["Cheesecake","cheesecake",5.50,"Desserts",0],
	["Apple Pie","applepie",4.50,"Desserts",0],
	["Creme Brulee","creambrulee",6.00,"Desserts",0]
]

listmaker(categories)
ShowItems(categories,menuitems)
function ShowItems(menuitem,items){
	let length = items.length;
	const container =[];
	for (let i = 0; i < length; i++) {
		if(items[i][3]==menuitem){
			container.push(items[i])
		}
	  }
	return container;
}

function makeitem(listitems){
	let li=document.createElement("li")
	li.classList.add("tooltippopup")
	
	li.setAttribute("id",)
	let name=document.createElement("p")
	name.classList.add("col-md-4")
	name.innerHTML=listitems[0]
	let price=document.createElement("p")
	let priceadder="$"+listitems[2]
	price.classList.add("col-md-1")
	price.innerHTML=priceadder;
	let imageminus=document.createElement("img")
	imageminus.classList.add("imagemenustyle")
	imageminus.setAttribute("width","25px")
	imageminus.setAttribute("height","25px")
	imageminus.setAttribute("src","assets/images/minus.png")
	let imageplus=document.createElement("img")
	imageplus.classList.add("imagemenustyle")
	imageplus.setAttribute("width","25px")
	imageplus.setAttribute("height","25px")
	imageplus.setAttribute("src","assets/images/plus.png")
	let itemcount=document.createElement("p")
	itemcount.classList.add("itemcount")
	itemcount.innerHTML=listitems[4]
	let itemtotal=document.createElement("p")
	itemtotal.classList.add("itemtotal","col-md-1")
	let totaladder="$"+0;
	itemtotal.innerHTML=totaladder;
	let span=document.createElement("span")
	span.classList.add("tooltippopuptext")
	let spanimage=document.createElement("img")
	spanimage.setAttribute("src",listitems[1])
	li.appendChild(name)
	li.appendChild(price)
	li.appendChild(imageminus)
	li.appendChild(itemcount)
	li.appendChild(imageplus)
	span.appendChild(spanimage)
	li.appendChild(itemtotal)
	li.appendChild(span)
	return li
}

function listmaker(category){
	for (let i = 0; i < category.length; i++){
		let parts=document.createElement("div")
		parts.classList.add("recomended_title")
		let parttitle=document.createElement("h4")
		parttitle.innerHTML=categories[i]
		parts.appendChild(parttitle)
		let findposition=document.getElementById("MenuContainerGroups")
		findposition.appendChild(parts)
		let ul=document.createElement("ul")
		let tmpcontainer = ShowItems(categories[i],menuitems)
		for (let i = 0; i < tmpcontainer.length; i++){
			ul.appendChild(makeitem(tmpcontainer[i]))
		}
		findposition.appendChild(ul)
	}
}

function addItemToList(item, int, dataid) {
    for (let i = 0; i < menuitems.length; i++) {
        if (menuitems[i][0] == item) {
			menuitems[i][1] = `../images/${dataid}.jpg`;
            if (int == -1 && menuitems[i][4] == 0) {
                menuitems[i][4] += int;
            }
        }
    }
}



jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});

	jQuery('.scrollup').click(function () {
		$("html, body").animate({scrollTop: 0}, 2000);
		return false;
	});
	jQuery('#btn-lg-animated').click(function () {
		$([document.documentElement, document.body]).animate({scrollTop: $("#targeteventcontaineranimate").offset().top}, 1000);
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
	const HighlightButton = document.querySelector('.TopBarHighlight');
	HighlightButton.addEventListener('click', function() {
		displayPage(".HighlightGroup",currPage)
		currPage = ".HighlightGroup";
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

	// start for event/show for the swithing panel
	var currEvents =".EventGroupList";
	const EventGroupButton = document.querySelector('.EventGroupButton');
	EventGroupButton.addEventListener('click', function() {
		displayEvent(".EventGroupList",currEvents)
		currEvents = ".EventGroupList";
	});
	const ShowGroupButton = document.querySelector('.ShowGroupButton');
	ShowGroupButton.addEventListener('click', function() {
		displayEvent(".ShowGroupList",currEvents)
		currEvents = ".ShowGroupList";
	});

	function displayEvent(gotopage,currentpage){
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
