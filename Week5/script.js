
//exercise 6
function loadTitle(){
    var elementHeading = document.getElementById('titleHeading');
    elementHeading.firstChild.nodeValue="I am loaded";
   }

function loadPara(){
    var para = document.getElementById('para');
    para.firstChild.nodeValue="I am updated";
}


/*//exercise 7
function btnAction(){
    var txt = document.getElementById('tbOne');
    alert(txt.value);
}
*/

function loadAll(){
    //exercise 6
    var elementHeading = document.getElementById('titleHeading');
    elementHeading.addEventListener('click',loadTitle);
    var para = document.getElementById('para');
    para.addEventListener('click',loadPara);
    
    
    // var btn = document.getElementById('btnOne');
    // btn.addEventListener('click',btnAction);

   }

document.addEventListener('DOMContentLoaded',loadAll);

