// var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
// for(var i=0;i<navMenuAnchorTags.length;i++){
//     navMenuAnchorTags[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var targetSectionID=this.textContent.trim().toLowerCase();
//         var targetSection=document.getElementById(targetSectionID);
//         console.log(targetSection);
//         var Interval=setInterval(function(){
//         var targetSectionCoordinates=targetSection.getBoundingClientRect();
//         	if(targetSectionCoordinates.top<=0){
//         		clearInterval(Interval);
//         		return;
//         	}
//         	window.scrollBy(0,50);
//         },50);	
//     });
// }


// Another way

var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
var Interval;
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID);
       // Interval=setInterval(scrollVertically,20,targetSection);

       Interval=setInterval(function(){
       	scrollVertically(targetSection);
       },20)
    });
}

function scrollVertically(targetSection){
 var targetSectionCoordinates=targetSection.getBoundingClientRect();
        	if(targetSectionCoordinates.top<=0){
        		clearInterval(Interval);
        		return;
        	}
        	window.scrollBy(0,50);
}


// Scroll on section

var Progressbar=document.querySelectorAll('.skill-progress > div');
console.log(Progressbar);
var skillsContainer=document.getElementById('skills-container');
console.log(skillsContainer);
window.addEventListener('scroll',checkScroll);
var animationDone=false;


//For initialising the bars with zero width

function initialiseBars(){
	for(let bar of Progressbar){
		console.log(bar);
		bar.style.width=0 + '%';
	}
}
initialiseBars();

function fillBars(){
	for(let bar of Progressbar){
		let tagerwidth=bar.getAttribute('skill-level');
		let currentwidth=0;
		let interval=setInterval(function(){
			if(currentwidth>tagerwidth){
				clearInterval(interval);
				return;
			}
			currentwidth++;
			bar.style.width=currentwidth+'%';
		},10);
	}
}

function checkScroll(){

	//You have to check skill container is visible
	var coordinates=skillsContainer.getBoundingClientRect();
	if(!animationDone && coordinates.top <= window.innerHeight){
		//filling of bars will take place
		animationDone=true;
		console.log('skills section visible');
		fillBars();
	}
	else if(coordinates.top > window.innerHeight){
		animationDone=false;
		initialiseBars();
	}
}