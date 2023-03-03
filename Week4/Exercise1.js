function print5(){
    var i=1;
    while (i<6){
        // alert(i); //Exercise1
        console.log(i); //Exercise2
        i++;
    }
}

print5();
print5();

//Exercise4
function changeContent(){
    var getChild = document.getElementById('headingTitle');
    getChild.firstChild.nodeValue="I am already loaded";
}

// document.addEventListener('DOMContentLoaded', changeContent);

document.addEventListener('click', changeContent); //Exercise5