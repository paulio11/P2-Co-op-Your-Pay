let menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', openSidebar);

let closeMenu = document.getElementById('close-menu');
closeMenu.addEventListener('click', closeSidebar);

let sidebarContainer = document.getElementById('sidebar-container');
let sidebarMenu = document.getElementById('sidebar');

function openSidebar() {  

  sidebarContainer.style.display = 'block';
  document.body.style.overflow = 'hidden';

}

function closeSidebar() {
  
  sidebarContainer.style.display = 'none';
  document.body.style.overflow = 'initial';

}