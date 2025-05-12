function search() {
    document.getElementById("search").style.display = "block";
    document.getElementById("icon").style.display = "none";
    document.getElementById("cross").style.display = "block";
}

function cross(){
    document.getElementById("cross").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("icon").style.display = "block";
}

function buyticket(){
    document.getElementById("ticketf").style.display = "block";
}

function exit(){
    document.getElementById("ticketf").style.display = "none";
}