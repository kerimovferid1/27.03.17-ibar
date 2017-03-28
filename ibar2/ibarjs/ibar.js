var marY=0;
var des=0;
var speed=8;
var scroll=null;

des2=document.querySelector('.contentUU').offsetHeight;
des4=document.querySelector('.depozit').offsetTop;
console.log(des4);

function initScroll(elementId) {
	
	
	des=document.getElementById(elementId).offsetTop+des4;
	// console.log(des);
	scroll=setTimeout(function(){
				initScroll(elementId);
	}, 1);
	marY = marY + speed;
	if(marY >= des){
		clearTimeout(scroll);
		console.log(des)
			}
	window.scrollTo(0,marY);
	}


	function initScrol(k) {
	
	
	des3=document.getElementById(k).offsetTop;
	console.log(des3);
	scroll=setTimeout(function(){
				initScrol(k);
	}, 2);
	marY = marY - speed;
	if(marY <= des3){
		clearTimeout(scroll);
		
			}
	window.scrollTo(0,marY);
	}

	var pos = document.querySelector(".scrollDepozit");

document.addEventListener("scroll",function(){
    var topValue = document.querySelector(".depozit").offsetTop;
    console.log(topValue);
    if(document.body.scrollTop > topValue){
     pos.style.position = "fixed";
     pos.style.top = 0 + "px";
    }else if(document.body.scrollTop < topValue){
        pos.style.position = "";
        pos.style.top = "";
    }
});
var price = document.getElementById("price");
var time = document.getElementById("time");
var priceValue = document.getElementById("priceValue");
var timeValue = document.getElementById("timeValue");
var priceResult = document.getElementById("priceResult");
var month = document.getElementById("month");
var year = document.getElementById("year");
var monthCount=time.value;
var mySelect = document.getElementById("mySelect");
var myP = document.getElementById("myP");
var optionValue = mySelect.options[mySelect.selectedIndex].value;

   function myFunc(){
        if(optionValue == "month"){
    myP.innerHTML = "Hər ay ödənilən faiz";
    if(monthCount == 12){
    priceResult.innerHTML = price.value*0.11 + ".00";
    month.innerHTML = ((price.value*0.11)/12).toFixed(2);
    }else if(monthCount == 24){
    priceResult.innerHTML = (price.value*0.12)*2 + ".00";
    month.innerHTML = (price.value*0.12)/12;
    }else{
    priceResult.innerHTML = (price.value*0.12)*3 + ".00";
    month.innerHTML = (price.value*0.12)/12 ;
    }
    }   else{
    myP.innerHTML = "Hər il ödənilən faiz";
    if(monthCount == 12){
    priceResult.innerHTML = price.value*0.12 + ".00";
    month.innerHTML =  price.value*0.12 ;
    }else if(monthCount == 24){
    priceResult.innerHTML = (price.value*0.13)*2 + ".00";
    month.innerHTML = price.value*0.13 ;
    }else{
    priceResult.innerHTML = (price.value*0.13)*3 + ".00";
    month.innerHTML = price.value*0.13 ;
    }
    }
    priceValue.innerHTML = price.value;
};