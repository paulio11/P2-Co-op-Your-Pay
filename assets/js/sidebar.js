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
  sidebarMenu.classList.remove('sidebar-closed');
  sidebarMenu.classList.add('sidebar-open');

}

/**
 * move container out of viewport, enable scrolling, close sidebar.
 */
function closeSidebar() {
  
  sidebarContainer.style.top = '-100vh';
  sidebarContainer.style.left = '-100vw';
  document.body.style.overflow = 'initial';
  sidebarMenu.classList.remove('sidebar-open');
  sidebarMenu.classList.add('sidebar-closed');

}




//just for fun.

window.onload = populateName()

function populateName() {
  if (localStorage.getItem('firstname') === null) {
    document.getElementById('name-span').innerHTML = 'Employee';
  } else {
    document.getElementById('name-span').innerHTML = localStorage.getItem('firstname');
  }
}



let helloEmployee = document.getElementById('user-name');
helloEmployee.addEventListener('click', addName);



function addName() {
  var namePrompt = prompt('What is your first name?');
  localStorage.setItem('firstname', namePrompt);
  document.getElementById('name-span').innerHTML = localStorage.getItem('firstname');
}