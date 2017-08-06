var condition=false;
$(".fa-bars").click(function(){
    if (condition==false) {
        $(".mainDrop").slideDown()
        condition=true;
    }
    else {
        $(".mainDrop").slideUp()
        condition=false;
    }
})
// active click on navigation
$(".navBarChoices ul li a").click(function(elem) {
    $(".navBarChoices ul li a").removeClass("activateLink");
    $(this).addClass("activateLink");
})

// event listener for services button
var serCond=false
var $services = $(".nav .navBar .navBarChoices > ul > li:nth-child(1)");
var $serDropDown = $(".nav .navBar .navBarChoices > ul > li:nth-child(1) ul")
$($services).click(function(){
    if (serCond==false) {
        $($serDropDown).slideDown()
        serCond=true;
    }
    else {
        $($serDropDown).slideUp()
        serCond=false;
    }
})

// event listener for services button in the main dropdown
var mainSerCond=false
var $mainServices = $(".mainDrop > ul > li:nth-child(1)");
var $mainSerDropDown = $(".mainDrop > ul > li:nth-child(1) > ul")
$($mainServices).click(function(){
    if (mainSerCond==false) {
        $($mainSerDropDown).slideDown()
        mainSerCond=true;
    }
    else {
        $($mainSerDropDown).slideUp()
        mainSerCond=false;
    }
})

var map1 = document.getElementsByClassName("maps1")[0];
var map2 = document.getElementsByClassName("maps2")[0];
var map3 = document.getElementsByClassName("maps3")[0];
 var one = document.getElementById("en")
 var two = document.getElementById("abs")
 var three = document.getElementById("db")

function london(){
	map2.style.display ="none";
	map1.style.display="block";
	map3.style.display = "none";

	one.style.background ="white";
	two.style.background ="#f5f6f7";
	three.style.background ="#f5f6f7";

	one.style.borderColor ="#57b87b";
	two.style.borderColor ="#e5e5e5";
	three.style.borderColor ="#e5e5e5";


}

function newyourk(){
	map1.style.display ="none";
	map2.style.display="block";
	map3.style.display = "none";

	one.style.background ="#f5f6f7";
	two.style.background ="white";
	three.style.background ="#f5f6f7";

	one.style.borderColor ="#e5e5e5";
	two.style.borderColor ="#57b87b";
	three.style.borderColor ="#e5e5e5";

}

function delhi(){
	map1.style.display ="none";
	map3.style.display="block";
	map2.style.display = "none"

	one.style.background ="#f5f6f7";
	two.style.background ="#f5f6f7";
	three.style.background ="white";

	one.style.borderColor ="#e5e5e5";
	two.style.borderColor ="#e5e5e5";
	three.style.borderColor ="#57b87b";
}