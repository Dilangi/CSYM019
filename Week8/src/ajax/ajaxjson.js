window.onload = makeAjaxRequest; // trigger the function makeAjaxRequest 

function makeAjaxRequest(){
    //Ajax resuest object
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        if(window.ActiveXObject){
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }

    //configure the Ajax Request
    if(xhr){
        xhr.open("GET","counties.json", true); // open connection with server
        xhr.send(); //send the request object
        xhr.onreadystatechange = showContents; //process Json data received from server
    }else{
        document.getElementById("updatemessage").innerHTML = "Could not perform stated request";
    }
}

function showContents(){
    if(xhr.readyState == 4){ // request is completed
        if(xhr.status == 200){ //request is successful
            let data = JSON.parse(xhr.responseText); //get data
            let txt ="";
            for(let i=0; i<data.counties.length; i++){
                txt +="<tr><td>"+data.counties[i].name + "</td></tr>" ; 
                
            }
            console.log(txt);
            document.getElementById("countylist").innerHTML = txt; //inject into markuo DOM
        } else{
            document.getElementById("updatemessage").innerHTML = "Error Occured: "+xhr.status;
        }
    }
}