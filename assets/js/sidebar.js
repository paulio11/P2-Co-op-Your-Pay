let menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', openSidebar);

let closeMenu = document.getElementById('close-menu');
closeMenu.addEventListener('click', closeSidebar);

let sidebarContainer = document.getElementById('sidebar-container');


function openSidebar() {  

  sidebarContainer.style.display = "block";

}

function closeSidebar() {
  
  sidebarContainer.style.display = "none";

}