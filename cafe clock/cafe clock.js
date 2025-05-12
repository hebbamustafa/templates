// making clock
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    let session = "AM";

    if (hrs >= 12){
        session = "PM";
    } 
    if (hrs > 12){
        hrs = hrs - 12;
    }
    if (hrs < 10)
        hrs = "0" + hrs;
    
    if (min < 10)
        min = "0" + min;
    
    if (sec < 10)
        sec = "0" + sec;
    

    document.getElementById("clocktime").innerHTML = hrs + ":" + min + ":" + sec + " " + session;
}

setInterval(displayTime, 1000);


// making menu appear on click

function menu(){
    document.getElementById("contactbtn").disabled = true;
    document.getElementById("menu").style.display = "block"
    document.getElementById("menu").style.width = "70%"
    document.getElementById("cross1").style.display = "block"
    document.getElementById("menubtn").style.display = "none"
    document.getElementById("data").style.display = "none"
    document.getElementById("clock").style.display = "none"
    document.getElementById("menubtn").style.display = "block"
    document.getElementById("information").style.opacity = "60%"
}

function menuexit(){
    document.getElementById("menu").style.display = "none"
    document.getElementById("contactbtn").disabled = false;
    document.getElementById("cross1").style.display = "none"
    document.getElementById("menubtn").style.display = "block"
    document.getElementById("data").style.display = "block"
    document.getElementById("clock").style.display = "block"
    document.getElementById("information").style.opacity = "100%"

}

function contact(){
    document.getElementById("menubtn").disabled = true;
    document.getElementById("form").style.display = "block"
    document.getElementById("form").style.width = "60%"
    document.getElementById("cross2").style.display = "block"
    document.getElementById("data").style.display = "none"
    document.getElementById("clock").style.display = "none"
    document.getElementById("information").style.opacity = "60%"
}

function contactexit(){ 
    document.getElementById("menubtn").disabled = false;
    document.getElementById("form").style.display = "none"
    document.getElementById("cross2").style.display = "none"
    document.getElementById("data").style.display = "block"
    document.getElementById("clock").style.display = "block"
    document.getElementById("information").style.opacity = "100%"
}

