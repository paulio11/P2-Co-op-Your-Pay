const todayDate = new Date();

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

document.getElementById('today').innerHTML = todayDate.toLocaleString('en-GB', options);