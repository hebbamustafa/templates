function flight(){
    document.getElementById("hotel").style.display = "none";
    document.getElementById("rental").style.display = "none";
    document.getElementById("flight").style.display = "block";
}

function hotel(){
    document.getElementById("rental").style.display = "none";
    document.getElementById("flight").style.display = "none";
    document.getElementById("hotel").style.display = "block";
}

function rental(){
    document.getElementById("hotel").style.display = "none";
    document.getElementById("flight").style.display = "none";
    document.getElementById("rental").style.display = "block";
}