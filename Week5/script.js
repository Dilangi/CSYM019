var count=0;
var timer=0;

function countOn(){
    count = count+1;
    console.log(count);
}

function changeBGColor(){
    var element = document.getElementById('circle');
    element.style.backgroundColor="blue";
}

function changeOpacity(){
    var element = document.getElementById('circle');
    element.style.opacity="1";
}

function updateOpacity(){
    var element = document.getElementById('circle');
    element.style.opacity= parseFloat(element.style.opacity)+0.1;
}

function lowerOpacity(){
    var element = document.getElementById('circle');
    element.style.opacity= parseFloat(element.style.opacity)-0.1;
}

function callInterval(){
    setInterval(lowerOpacity,1000);
}

function moveLeft(){
    var element = document.getElementById('circle');
    var positioLeft = element.offsetLeft;
    element.style.left = element.offsetLeft -10+'px';
}

function moveRight(){
    var element = document.getElementById('circle');
    var positioLeft = element.offsetLeft;
    element.style.left = element.offsetLeft +10+'px';
}

function moveUp(){
    var element = document.getElementById('circle');
    var positionTop = element.offsetTop;
    element.style.top = element.offsetTop -10+'px';
}

function moveDown(){
    var element = document.getElementById('circle');
    var positionTop = element.offsetTop;
    element.style.top = element.offsetTop +10+'px';
}

function triggerKey(event){
    console.log(event.keyCode);
    
    clearInterval(timer);

    if(event.keyCode==37){
        timer = setInterval(moveLeft,10);

    }
    else if(event.keyCode==38){
        timer = setInterval(moveUp,10);
    }
    else if(event.keyCode==39){
        timer = setInterval(moveRight,10);
    }
    else if(event.keyCode==40){
        timer = setInterval(moveDown,10);
    }
}

function loadAll(){
    var element = document.getElementById('circle');
    // element.style.opacity="0.5";
    element.style.opacity="1";
    // element.addEventListener('click', countOn);
    document.addEventListener('keydown',triggerKey);
}

document.addEventListener('DOMContentLoaded',loadAll)

//css properties always have .style sub wording. all css properties are in string in the js file. if not that is a js method name.