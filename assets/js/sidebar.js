let menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', openSidebar);

let closeMenu = document.getElementById('close-menu');
closeMenu.addEventListener('click', closeSidebar);

let sidebarContainer = document.getElementById('sidebar-container');
let sidebarMenu = document.getElementById('sidebar');

function openSidebar() {  

  sidebarContainer.style.top = '0';
  sidebarContainer.style.left = '0';
  document.body.style.overflow = 'hidden';
  sidebarMenu.classList.add('sidebar-open');
  sidebarMenu.classList.remove('sidebar-closed');

}

function closeSidebar() {
  
  sidebarContainer.style.top = '-100vh';
  sidebarContainer.style.left = '-100vw';
  document.body.style.overflow = 'initial';
  sidebarMenu.classList.add('sidebar-closed');
  sidebarMenu.classList.remove('sidebar-open');

}