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
    
    $.ajax({
        url: "counties.json",
        type: "GET",
        dataType: "json",
        success: function(response){
            let sTxt = "";
            $.each(response.counties, function(index){
                sTxt += "<tr><td>" + response.counties[index].name + "</td></tr>" ;
            });
            $("#countylist").append(sTxt);
        },
        error: function(){
            document.getElementById("updatemessage").innerHTML = "Could not perform stated request";}
    });
}