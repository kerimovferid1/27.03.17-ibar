var arr = ["ibarimg/img/1.jpg","ibarimg/img/2.jpg","ibarimg/img/3.jpg"];

var sliderL= document.querySelector(".sliderL");
var dot= document.querySelectorAll(".doot");

for(var i=0;i<dot.length;i++){
	dot[i].addEventListener("click",function(){
	for(var j=0;j<dot.length;j++){
		dot[j].classList.remove("active");
	}console.log(this)
	this.classList.add("active");
	val=this.getAttribute("data-value");
	
	sliderL.style.backgroundImage="url("+arr[val]+")";
	})
}
// document.getElementsByClassName("sliderL").setAttribute("background-image:url(" + attr + ")");

var mes=document.querySelector(".meselen");
var input=document.querySelector(".searchBox");
var inp=document.querySelector(".span");
var mid=document.querySelector(".middle")
input.addEventListener("click", function() {
	mes.style.height="44px";
	inp.style.fontSize="0.4em";
	inp.style.top="-12"+"px"

})
window.addEventListener("click", function() {
	if(document.activeElement != input){
	mes.style.height="0px";
	inp.style.fontSize="1em";
	inp.style.top="30px"
}
})
var midM=document.querySelector(".middle_menu");
var inputM=document.querySelector(".input_menu");
var main=document.querySelector("#main");
var line1=document.querySelector('.line1');
var line3=document.querySelector('.line3');
midM.addEventListener("click", function(event) {
	event.preventDefault();
	inputM.style.right="0";
	main.style.transform="scale(0.9)";
})
// midM.addEventListener("mouseover", function(event) {
// 	line1.style.top="10px";
// 	line3.style.top="34px";
// 	event.preventDefault();
// })
// midM.addEventListener("mouseleave", function(event) {
// 	line1.style.top="14px";
// 	line3.style.top="38px";
// 	event.preventDefault();
// })
var ikss=document.querySelector(".iks");
ikss.addEventListener("click", function() {
	// event.preventDefault();
	inputM.style.right="-1100"+"px";
	main.style.transform="scale(1,1)";

})
ikss.addEventListener("mouseover", function(){
	ikss.style.transform="rotate(90deg)"
})
ikss.addEventListener("mouseleave", function(){
	ikss.style.transform="rotate(0deg)"
})
main.addEventListener("click", function() {
	if(document.activeElement != midM){
	inputM.style.right="-1100px";
	main.style.transform="scale(1,1)";

}
})

var ferdi=document.querySelector(".ferdiS");
var korps=document.querySelector(".korps");
var inpM=document.querySelector(".input_menu_down")
ferdi.addEventListener("click", function(event) {
	event.preventDefault();
	inpM.style.right="0";

})
korps.addEventListener("click", function(event) {
	event.preventDefault();
	inpM.style.right="990"+"px";

})

var mainn=document.querySelector(".main")
var maain=document.querySelector(".mainn")
var element = document.querySelector(".ferdii")
var middle = document.querySelector(".middle")
var opas1=document.querySelector(".opas2");
var opas2=document.querySelector(".opas1");
var logo=document.querySelector(".logo")
element.addEventListener("click",function(event){
	setTimeout(function(){
mainn.style.width="56vw";
	opas1.style.opacity=1;
	}, 1000)
	
	maain.style.top="-100vh";

	middle.style.top="-80%";
	setTimeout(function(){

	opas1.style.opacity=1;
	}, 1000)
opas2.style.opacity=0;
	event.preventDefault();

})
logo.addEventListener("click",function(event){
	// setTimeout(function(){
mainn.style.width="0";
	opas1.style.opacity=0;
	opas2.style.opacity=0;
	// }, 1000)
	
	maain.style.top="-100vh";
setTimeout(function(){
	middle.style.top="0";
	}, 1000)
	setTimeout(function(){

	opas1.style.opacity=0;
	opas2.style.opacity=0;
	}, 1000)
opas2.style.opacity=0;
opas1.style.opacity=0;
	event.preventDefault();

})
var mainn=document.querySelector(".main")
var element = document.querySelector(".korporativ")
element.addEventListener("click",function(event){
	setTimeout(function(){
mainn.style.width="56vw";
	opas2.style.opacity=1;
	}, 1000)
	
	maain.style.top="-200vh";
	middle.style.top="-80%";
	opas1.style.opacity=0;
	setTimeout(function(){

	opas2.style.opacity=1;
	}, 1000)
		event.preventDefault();

})

// slider
function slider(val) {
    // var attr = val.getElementsByTagName("img")[0].getAttribute("src");
    // document.getElementsByClassName("slider")[0].setAttribute("style", "background-image:url(" + attr + ")");
    for (var i = 0; i < document.getElementsByClassName("feerdi").length; i++) {
        var element = document.getElementsByClassName("feerdi")[i];
        element.className = element.className.replace("otherclass", "");
  console.log(element);
    }
    if (!val.classList.contains('otherclass')) {
        val.className += " otherclass";
        console.log(val)
    }
}


var contac=document.querySelector(".contac_us");
var conta=document.querySelector(".contactUs")
var usb=document.querySelector(".usBg")
var next=document.querySelector(".next")
contac.addEventListener("click",function(el){
     conta.style.right="0";
	main.style.transform="scale(0.9)";
     el.preventDefault();
})
// contac.addEventListener("click",function(el){
 
// })
var ks=document.querySelector(".kss");
ks.addEventListener("click",function(el){
	conta.style.right="-400px";
main.style.transform="scale(1,1)";
 el.preventDefault();

})

// main.addEventListener("click", function() {
// 	if(document.activeElement != contac){
// 	conta.style.right="-400px";
// 	main.style.transform="scale(1,1)";
// }

// })