function navOpen(){
    document.getElementById("nav").style.display = "flex"
    document.getElementById("nav").style.width = "100%"
    document.getElementById("close").style.display = "block"
    document.getElementById("open").style.display = "none"

}
function navClose(){
    document.getElementById("nav").style.display = "none"
    document.getElementById("close").style.display = "none"
    document.getElementById("open").style.display = "block"


}

function gap(){
    const grid_container = document.getElementById("grid-container")
    const contains_grid_gap = grid_container.classList.contains("grid-gap")
    if (contains_grid_gap){
        grid_container.classList.remove("grid-gap")
    } else {
        grid_container.classList.add("grid-gap")
    }
}