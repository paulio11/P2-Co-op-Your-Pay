const todayDate = new Date();

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

//remember jan = 0
const paydays = [new Date(2022, 8, 22), new Date(2022, 9, 20), new Date(2022, 10, 17), new Date(2022, 11, 15)];

let nextPayday = null;
for (let i = 0; i < paydays.length; i++) {
  if (paydays[i] > todayDate) {
    nextPayday = paydays[i];
    break;
  }
}

document.getElementById('today').innerHTML = todayDate.toLocaleString('en-GB', options);
document.getElementById('next-payday').innerHTML = nextPayday.toLocaleString('en-GB', options);