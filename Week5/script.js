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

function triggerKey(event){
    console.log(event.keyCode);
}

function loadAll(){
    var element = document.getElementById('circle');
    // element.style.opacity="0.5";
    element.style.opacity="1";
    // element.addEventListener('click', moveLeft);
    document.addEventListener('keydown',triggerKey(Event));
}

document.addEventListener('DOMContentLoaded',loadAll)

//css properties always have .style sub wording. all css properties are in string in the js file. if not that is a js method name.