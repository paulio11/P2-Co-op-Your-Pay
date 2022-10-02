//scroll to top button script for long pages - calculator.html, understand.html and problems.html.
//code from w3schools - https://www.w3schools.com/howto/howto_js_scroll_to_top.asp.

let topButton = document.getElementById('top-button');
window.onscroll = function () {
  scrollFunction()
}

/**
 * Shows or hides scroll to top button based on scrolled distance from top of page.
 */
function scrollFunction() {
  if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
    //if user scrolls below header (64px).
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
}

/**
 * Scrolls page back to top.
 */
function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}