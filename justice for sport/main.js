var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var SideMenu = document.getElementById('sidemenu');

function openmenu() {
    SideMenu.style.right = "0";
}
function closemenu() {
    SideMenu.style.right = "-200px";
}

var div=document.getElementsById('con')
var display=none;

function hideshow(){
    if(display==1){
        div.style.display='block';
    }
    else{
        div.style.display='none';
        display='block';
    }
}