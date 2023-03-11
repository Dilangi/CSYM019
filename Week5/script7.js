// task 1-4
function btnAction(){
    var txt = document.getElementById('tbOne');
    var div = document.getElementById('divOne');

    // alert(txt.value); //task 2

    div.firstChild.nodeValue+=" "+txt.value;  //task 4
}

//task5
function displayInput(){
    var txt = document.getElementById('tbOne');
    var div = document.getElementById('divOne');
    div.firstChild.nodeValue ="Hello "+ txt.value;
}


function loadAll(){
    //task 1-4
    // var btn = document.getElementById('btnOne');
    // btn.addEventListener('click',btnAction);

    //task 5
    var txt = document.getElementById('tbOne');
    txt.addEventListener('keyup',displayInput);
   }

document.addEventListener('DOMContentLoaded',loadAll);

