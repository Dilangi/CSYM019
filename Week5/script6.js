function loadTitle(){
    var elementHeading = document.getElementById('titleHeading');
    elementHeading.firstChild.nodeValue="I am loaded";
   }

function loadMouseEntered(){
    var elementHeading = document.getElementById('titleHeading');
    elementHeading.firstChild.nodeValue="Cursor is over me";
}

function loadMouseLeave(){
    var elementHeading = document.getElementById('titleHeading');
    elementHeading.firstChild.nodeValue="I am back again";
}

function loadPara(){
    var para = document.getElementById('para');
    para.firstChild.nodeValue="I got clicked";
}


function loadAll(){
    var elementHeading = document.getElementById('titleHeading');
    elementHeading.addEventListener('click',loadTitle);
    
    elementHeading.addEventListener('mouseenter',loadMouseEntered);
    elementHeading.addEventListener('mouseleave',loadMouseLeave);

    var para = document.getElementById('para');
    para.addEventListener('click',loadPara);
   }

document.addEventListener('DOMContentLoaded',loadAll);