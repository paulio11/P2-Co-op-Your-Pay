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

  sidebarContainer.style.visibility = 'visible';
  document.body.style.overflow = 'hidden';
  sidebarMenu.classList.remove('sidebar-closed');
  sidebarMenu.classList.add('sidebar-open');

}

/**
 * move container out of viewport, enable scrolling, close sidebar.
 */
function closeSidebar() {

  sidebarContainer.style.visibility = 'hidden';
  document.body.style.overflow = 'initial';
  sidebarMenu.classList.remove('sidebar-open');
  sidebarMenu.classList.add('sidebar-closed');

}




//just for fun.

let userMenu = document.getElementById('user-name');
let nameSpan = document.getElementById('name-span');
var userName = localStorage.getItem('username');

window.onload = loadName();



function loadName() {

  if (userName == 'null') {
    nameSpan.innerHTML = 'Employee'
    console.log('no username');
  } else {
    nameSpan.innerHTML = userName;
    console.log('username exists: ' + userName);
  }

}





userMenu.addEventListener('click', addName);

function addName() {

  var namePrompt = prompt('What is your name?');
  localStorage.setItem('username', namePrompt);
  if (namePrompt === null) {
    nameSpan.innerHTML = 'Employee';
  } else {
    nameSpan.innerHTML = namePrompt;
  }

}