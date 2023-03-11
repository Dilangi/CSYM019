function changeBGColor(){
    var element = document.getElementById('circle');
    element.style.backgroundColor="blue";
}

function changeOpacity(){
    var element = document.getElementById('circle');
    element.style.opacity="1";
}

function loadAll(){
    var element = document.getElementById('circle');
    element.style.opacity="0.5";
    element.addEventListener('click',changeBGColor);
    element.addEventListener('click',changeOpacity);
}

document.addEventListener('DOMContentLoaded',loadAll)