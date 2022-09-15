//create new date for today.
const todayDate = new Date();

//options for toLocaleString.
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

//array of paydays (remember jan is 0).
const paydays = [
  new Date(2022, 8, 22),
  new Date(2022, 9, 20),
  new Date(2022, 10, 17),
  new Date(2022, 11, 15),
  new Date(2023, 0, 12)
];

let nextPayday = null;

//loop through paydays.
for (let i = 0; i < paydays.length; i++) {
  if (paydays[i] > todayDate) {
    nextPayday = paydays[i];
    //breaks loop at first payday higher than todayDate.
    break;
  }
}

//days untill next payday.
let daysUntil = nextPayday - todayDate;

//turns milliseconds into days.
let daysUntilDays = daysUntil / (1000 * 3600 * 24);

//populates next-payday span with date from loop.
document.getElementById('next-payday').innerHTML = nextPayday.toLocaleString('en-GB', options);

//populates days-until span with days until payday to 0 decimals.
document.getElementById('days-until').innerHTML = daysUntilDays.toFixed(0);

//populates day-s span with day or days.
let daysSpan = document.getElementById('day-s');
if (daysUntilDays.toFixed(0) == 1) {
  daysSpan.innerHTML = 'day';
} else {
  daysSpan.innerHTML = 'days';
}