// Tab behaviour (if present on page)
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, evt) {
    for (var i = 0; i < tablinks.length; i++) tablinks[i].classList.remove("active-link");
    for (var i = 0; i < tabcontents.length; i++) tabcontents[i].classList.remove("active-tab");
    if (evt && evt.currentTarget) evt.currentTarget.classList.add("active-link");
    var el = document.getElementById(tabname);
    if (el) el.classList.add("active-tab");
}

// Side menu
var SideMenu = document.getElementById('sidemenu');
function openmenu() { if (SideMenu) SideMenu.style.right = "0"; }
function closemenu() { if (SideMenu) SideMenu.style.right = "-200px"; }

// Contact section show/hide helper
var conDiv = document.getElementById('con');
function hideshow(){
    if (!conDiv) return;
    if (conDiv.style.display === 'none' || window.getComputedStyle(conDiv).display === 'none') {
        conDiv.style.display = 'block';
    } else {
        conDiv.style.display = 'none';
    }
}

// Footer: set current year dynamically
document.addEventListener('DOMContentLoaded', function(){
    var y = new Date().getFullYear();
    var el = document.getElementById('year');
    if (el) el.textContent = y;
});