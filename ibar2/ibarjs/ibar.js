var marY=0;
var des=0;
var speed=5;
var scroll=null;

des2=document.querySelector('.contentUU').offsetHeight;

function initScroll(elementId) {
	
	
	des=document.getElementById(elementId).offsetTop+des2;
	// console.log(des);
	scroll=setTimeout(function(){
				initScroll(elementId);
	}, 0.1);
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

	