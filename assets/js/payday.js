const todayDate = new Date();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
const paydays = [new Date(2022, 8, 22), new Date(2022, 9, 20), new Date(2022, 10, 17), new Date(2022, 11, 15)]; //remember jan = 0

let nextPayday = null;
for (let i = 0; i < paydays.length; i++) {
  if (paydays[i] > todayDate) {
    nextPayday = paydays[i];
    break;
  }
}

let daysUntil = nextPayday - todayDate;
let daysUntilDays = daysUntil / (1000 * 3600 * 24);
let daysSpan = document.getElementById('day-s');

document.getElementById('next-payday').innerHTML = nextPayday.toLocaleString('en-GB', options);
document.getElementById('days-until').innerHTML = daysUntilDays.toFixed(0);

if (daysUntilDays.toFixed(0) == 1) {
  daysSpan.innerHTML = 'day';
} else {
  daysSpan.innerHTML = 'days';
}