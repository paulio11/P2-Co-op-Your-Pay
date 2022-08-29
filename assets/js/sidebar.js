//add event listener to menu button -> run openSidebar.
let menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', openSidebar);

//add event listener to close button -> run closeSidebar.
let closeMenu = document.getElementById('close-menu');
closeMenu.addEventListener('click', closeSidebar);

//assigning container and sidebar to variables.
let sidebarContainer = document.getElementById('sidebar-container');
let sidebarMenu = document.getElementById('sidebar');

/**
 * move container on to viewport, disable scrolling, open sidebar.
 */
function openSidebar() {  

  sidebarContainer.style.top = '0';
  sidebarContainer.style.left = '0';
  document.body.style.overflow = 'hidden';
  sidebarMenu.classList.add('sidebar-open');
  sidebarMenu.classList.remove('sidebar-closed');

}

/**
 * move container out of viewport, enable scrolling, close sidebar.
 */
function closeSidebar() {
  
  sidebarContainer.style.top = '-100vh';
  sidebarContainer.style.left = '-100vw';
  document.body.style.overflow = 'initial';
  sidebarMenu.classList.add('sidebar-closed');
  sidebarMenu.classList.remove('sidebar-open');

}

//just for fun!
let helloEmployee = document.getElementById('user-name');
helloEmployee.addEventListener('click', addName);

/**
 * popup prompt to ask name, then change span html.
 */
function addName() {

  var name = prompt('What is your name?');

  let nameSpan = document.getElementById('name-span');
  nameSpan.innerHTML = name;

}