/*
 jQuery;
 */

"use strict";

//menu item [name,image source, price,category,curritem count(no change please)]
const categories=["Drinks","Main Courses","Desserts"]
const menuitems=[
	["Berry Bliss Smoothie","berry",6.75,"Drinks",0],
	["Tropical Sunset Cocktail","tropicalSunset",10.00,"Drinks",0],
	["Matcha Madness Latte","matchaMadnessLatte",5.75,"Drinks",0],
	["Citrus Splash Refresher","citrusSplashRefresher",6.00,"Drinks",0],
	["Matcha Madness Latte","mintyMojito",9.00,"Drinks",0],
	["Spaghetti Carbonara","spaghettiCarbonara",6.75,"Main Courses",0],
	["Grilled Chicken Breast","grilledChickenBreast",14.00,"Main Courses",0],
	["Beef Steak","beefSteak",18.00,"Main Courses",0],
	["Pan-Seared Salmon","grilledChickenBreast",16.50,"Main Courses",0],
	["Vegetable Stir-Fry","vegetableStirFry",11.00,"Main Courses",0],
	["Chocolate Lava Cake","lavacake",6.50,"Desserts",0],
	["Tiramisu","tiramisu",5.00,"Desserts",0],
	["Cheesecake","cheesecake",5.50,"Desserts",0],
	["Apple Pie","applepie",4.50,"Desserts",0],
	["Creme Brulee","cremebrulee",6.00,"Desserts",0]
]

//starter code
let currentidcount =0;
for (let i = 0; i < menuitems.length; i++) {
	menuitems[i][1] = `assets/images/${menuitems[i][1]}.jpg`;
}
listmaker(categories)
ShowItems(categories,menuitems)
//end of starter code


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
	let idmakerstuffig ="MenuItemID"+currentidcount;
	li.setAttribute("id",idmakerstuffig)
	let name=document.createElement("p")
	name.classList.add("col-md-4")
	name.innerHTML=listitems[0]
	let price=document.createElement("p")
	let priceadder="$"+listitems[2]
	price.classList.add("col-md-1")
	price.innerHTML=priceadder;
	let imageminus=document.createElement("img")
	let itemA="'"+listitems[0]+"'"
	let itemB="'"+idmakerstuffig+"'"
	let onclickcommandminus="additemtolist("+itemA+",-1,"+itemB+")"
	imageminus.setAttribute("onclick",onclickcommandminus)
	imageminus.classList.add("imagemenustyle")
	imageminus.setAttribute("width","25px")
	imageminus.setAttribute("height","25px")
	imageminus.setAttribute("src","assets/images/minus.png")
	let imageplus=document.createElement("img")
	imageplus.classList.add("imagemenustyle")
	imageplus.setAttribute("width","25px")
	imageplus.setAttribute("height","25px")
	imageplus.setAttribute("src","assets/images/plus.png")
	let onclickcommandplus="additemtolist("+itemA+",1,"+itemB+")"
	imageplus.setAttribute("onclick",onclickcommandplus)
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
			currentidcount +=1;
		}
		findposition.appendChild(ul)
	}
}

function additemtolist(item,int,dataid){
    for (let i = 0; i < menuitems.length; i++) {
        if (menuitems[i][0] == item) {
			if(int==-1 && menuitems[i][4]==0){break}
			if(int==-1){
				menuitems[i][4] -= 1;
				let elementitem=document.getElementById(dataid).children;
				document.getElementById(dataid).children[3].innerHTML=menuitems[i][4]
				document.getElementById(dataid).children[5].innerHTML=("$"+(menuitems[i][2]*menuitems[i][4]))
			}
			else{
				menuitems[i][4] += 1;
				let elementitem=document.getElementById(dataid).children;
				document.getElementById(dataid).children[3].innerHTML=menuitems[i][4]
				document.getElementById(dataid).children[5].innerHTML=("$"+(menuitems[i][2]*menuitems[i][4]))
				
				break
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

	const clickheretopayup = document.querySelector('.clickheretopayup');
	clickheretopayup.addEventListener('click', function() {
		let totalcheckout=0;
		document.getElementById("menucheckout").classList.remove("inactiveA")
		document.getElementById("menucheckout").classList.add("activeA")
		document.getElementById("menualllist").classList.remove("activeA")
		document.getElementById("menualllist").classList.add("inactiveA")
		document.getElementById("clickheretopayup").classList.remove("activeA")
		document.getElementById("clickheretopayup").classList.add("inactiveA")
		for (let i = 0; i < menuitems.length; i++) {
			if(menuitems[i][4]!=0){
				let wahtevernameguh=document.createElement("ul")
				wahtevernameguh.setAttribute("id","Checkout-item")
				let itemnamecheckout = document.createElement("li");
				itemnamecheckout.classList.add("col-sm-10","text-left")
				let addstufffornamecheckout=menuitems[i][0]+" x"+menuitems[i][4]
				let itemnamecheckoutA=document.createElement("p");
				itemnamecheckoutA.innerHTML=addstufffornamecheckout;
				itemnamecheckout.appendChild(itemnamecheckoutA)
				let itemPricecheckout = document.createElement("li");
				itemPricecheckout.classList.add("col-sm-2","text-right")
				let addstuffforpricecheckout="$"+(menuitems[i][2]*menuitems[i][4])
				totalcheckout+=(menuitems[i][2]*menuitems[i][4])
				let itemPricecheckouttxt=document.createElement("p");
				itemPricecheckouttxt.innerHTML=addstuffforpricecheckout;
				itemPricecheckout.appendChild(itemPricecheckouttxt)
				wahtevernameguh.appendChild(itemnamecheckout)
				wahtevernameguh.appendChild(itemPricecheckout)

				document.getElementById("CheckOutItems").appendChild(wahtevernameguh)

			}
		  }
		  let wahtevernameguh=document.createElement("ul")
			wahtevernameguh.setAttribute("id","Checkout-item")
			let itemnamecheckout = document.createElement("li");
			itemnamecheckout.classList.add("col-sm-10","text-left")
			let itemnamecheckoutA=document.createElement("p");
			itemnamecheckoutA.innerHTML="Total Price";
			itemnamecheckout.appendChild(itemnamecheckoutA)
			let itemPricecheckout = document.createElement("li");
			itemPricecheckout.classList.add("col-sm-2","text-right")
			let itemPricecheckouttxt=document.createElement("p");
			itemPricecheckouttxt.innerHTML=("$"+totalcheckout);
			itemPricecheckout.appendChild(itemPricecheckouttxt)
			wahtevernameguh.appendChild(itemnamecheckout)
			wahtevernameguh.appendChild(itemPricecheckout)
			document.getElementById("CheckOutItems").appendChild(wahtevernameguh)
	});
	function a(targetlist){
		
	}

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