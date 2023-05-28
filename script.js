var menubtn = document.getElementById("menubtn")
var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu")

sidenav.style.right = "-250px";

menubtn.onclick = function(){
    if(sidenav.style.right =="-250px"){
        sidenav.style.right ="0";
        menu.src = "https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png"
    }
    else{
        sidenav.style.right = "-250px";
        menu.src = "https://icon-library.com/images/white-menu-icon-png/white-menu-icon-png-18.jpg";
    }
}