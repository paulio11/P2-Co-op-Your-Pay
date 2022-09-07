const today = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[today.getMonth()];

//looks at last digit of date number and adds correct suffix to the string.
const dateSuffix = (date) => {
  var dateString = date.toString();
  var lastDigit = dateString.slice(-1);
  var secondLast = dateString.length > 1 ? dateString.slice(-2, -1) : null;
  //for dates 11th, 12th, and 13th.
  if (secondLast && secondLast == '1') return 'th';
  if (lastDigit == '1') return 'st';
  if (lastDigit == '2') return 'nd';
  if (lastDigit == '3') return 'rd';
  return 'th';
}


document.getElementById('day').innerHTML = today.getDate() + dateSuffix(today.getDate());
document.getElementById('month').innerHTML = month;
document.getElementById('year').innerHTML = today.getFullYear();