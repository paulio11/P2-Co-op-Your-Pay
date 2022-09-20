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
 * Make container visible, disable scrolling, open sidebar.
 */
function openSidebar() {

  sidebarContainer.style.visibility = 'visible';
  document.body.style.overflow = 'hidden';
  sidebarMenu.classList.remove('sidebar-closed');
  sidebarMenu.classList.add('sidebar-open');

}

/**
 * Make container invisible, enable scrolling, close sidebar.
 */
function closeSidebar() {

  sidebarContainer.style.visibility = 'hidden';
  document.body.style.overflow = 'initial';
  sidebarMenu.classList.remove('sidebar-open');
  sidebarMenu.classList.add('sidebar-closed');

}

let nameSpan = document.getElementById('name-span');
let userName = localStorage.getItem('username');

window.onload = loadName();

/**
 * Gets username from local storage and populates span.
 */
function loadName() {

  //get username.
  if (userName === 'null' || userName === null || userName === '') {
    //if there is no username set, use 'Employee'.
    userName = 'Employee';
    console.log('No username');
  } else {
    //else fill span with username from local storage.
    nameSpan.innerHTML = userName;
    console.log('Username exists: ' + userName);
  }

}

//add event listener to username div in header -> run addName.
let userMenu = document.getElementById('user-name');
userMenu.addEventListener('click', addName);

/**
 * Calls a prompt, ouput of which is set as username in localstorage.
 */
function addName() {

  var namePrompt = prompt('What is your name?');
  //set username.
  if (namePrompt === 'null' || namePrompt === null || namePrompt === '') {
    //if user cancels out of prompt.
    nameSpan.innerHTML = 'Employee';
    localStorage.setItem('username', namePrompt);
  } else {
    //fill name-span with input from prompt.
    nameSpan.innerHTML = namePrompt;
    localStorage.setItem('username', namePrompt);
  }

}