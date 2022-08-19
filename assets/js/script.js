//populates calendar on page load.
window.onload = populateCalendar();

//populates calendar again if form input is changed.
document.getElementById('pay-period').addEventListener('change', populateCalendar);

/**
 * Populates calendar with dates and week numbers based on selected pay period.
 */
function populateCalendar() {

  const period202201 = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; //19 December 2021 - 15 January 2022
  const period202202 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //16 January 2022 - 12 February 2022
  const period202203 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //13 February 2022 - 12 March 2022
  const period202204 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //13 March 2022- 9 April 2022
  const period202205 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7]; //10 April 2022 - 7 May 2022
  const period202206 = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4]; //8 May 2022 - 4 June 2022
  const period202207 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2]; //5 June 2022 - 2 July 2022
  const period202208 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]; //3 July 2022 - 30 July 2022
  const period202209 = [31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]; //31 July 2022 - 27 August 2022
  const period202210 = [28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] //28 August 2022 - 24 September 2022

  let payPeriodValue = document.getElementById('pay-period').value;
  let selectedPeriod = [];
  let weekNumbers = [];
  let payday = '';
  let nextPayday = '';

  //if statement to set correct variables for calendar and dates.
  if (payPeriodValue == '202201') {
    selectedPeriod = period202201;
    weekNumbers = [51, 52, 1, 2];
    payday = '13th January';
    nextPayday = '10th February';
  } else if (payPeriodValue == '202202') {
    selectedPeriod = period202202;
    weekNumbers = [3, 4, 5, 6];
    payday = '10th February';
    nextPayday = '10th March';
  } else if (payPeriodValue == '202203') {
    selectedPeriod = period202203;
    weekNumbers = [7, 8, 9, 10];
    payday = '10th March';
    nextPayday = '7th April';
  } else if (payPeriodValue == '202204') {
    selectedPeriod = period202204;
    weekNumbers = [11, 12, 13, 14];
    payday = '7th April';
    nextPayday = '5th May';
  } else if (payPeriodValue == '202205') {
    selectedPeriod = period202205;
    weekNumbers = [15, 16, 17, 18];
    payday = '5th May';
    nextPayday = '1st June';
  } else if (payPeriodValue == '202206') {
    selectedPeriod = period202206;
    weekNumbers = [19, 20, 21, 22];
    payday = '1st June';
    nextPayday = '30th June';
  } else if (payPeriodValue == '202207') {
    selectedPeriod = period202207;
    weekNumbers = [23, 24, 25, 26];
    payday = '30th June';
    nextPayday = '28th July';
  } else if (payPeriodValue == '202208') {
    selectedPeriod = period202208;
    weekNumbers = [27, 28, 29, 30];
    payday = '28th July';
    nextPayday = '25th August';
  } else if (payPeriodValue == '202209') {
    selectedPeriod = period202209;
    weekNumbers = [31, 32, 33, 34];
    payday = '25th August';
    nextPayday = '22nd September';
  } else if (payPeriodValue == '220210') {
    selectedPeriod = period202210;
    weekNumbers = [35, 36, 37, 38];
    payday = '22nd September';
    nextPayday = '20th October';
  }

  //looks at last digit of date number and adds correct suffix to the string.
  const dateSuffix = (date) => {
    var lastDigit = date.toString().slice(-1);
    if (lastDigit == '1') return 'st';
    if (lastDigit == '2') return 'nd';
    if (lastDigit == '3') return 'rd';
    return 'th';
  }

  //populates empty calendar with correct dates from array into <span class="date">.
  let dates = document.getElementsByClassName('date');
  for (let i = 0; i < dates.length; i++) {
    dates[i].innerHTML = selectedPeriod[i] + dateSuffix(selectedPeriod[i]);
  }

  //populates weeks with correcnt numbers from array into <span class="week-number">.
  let weeks = document.getElementsByClassName('week-number');
  for (let i = 0; i < weeks.length; i++) {
    weeks[i].innerHTML = weekNumbers[i];
  }

  //populates results with payday and next payday dates.
  let paydaySpan = document.getElementById('payday');
  paydaySpan.innerHTML = payday;
  let nextPaydaySpan = document.getElementById('next-payday');
  nextPaydaySpan.innerHTML = nextPayday;

}

/**
 * Gets and returns correct wage from the values of job role and london location html inputs.
 */
function getWage() {

  let wage = 0;
  let tl = document.getElementById('tl').checked;
  let ctm = document.getElementById('ctm').checked;
  let london = document.getElementById('london').checked;

  //if statement to set correct value to wage.
  if (tl && london) {
    wage = 12.35;
  } else if (tl) {
    wage = 11.00;
  } else if (ctm && london) {
    wage = 11.25;
  } else if (ctm) {
    wage = 9.90;
  }

  //populates results with correct wage to two decimal places.
  let wageSpan = document.getElementById('your-wage');
  wageSpan.innerHTML = '£' + wage.toFixed(2);

  return wage;

}

/**
 * Adds up hours from form input for a week.
 */
function addWeek(week) {

  let thisWeek = document.getElementById(week)
  let thisWeekHours = thisWeek.getElementsByClassName('hours');
  let thisWeekHoursArray = [];
  let thisWeeksSum = 0;

  //for loop that looks at each <span class="hours"> in a week and pushes to array then adds to return thisWeeksSum.
  for (let i = 0; i < 7; i++) {
    thisWeekHoursArray.push(thisWeekHours[i].value);
    if (isNaN(parseFloat(thisWeekHoursArray[i]))) { //if NaN/empty it skips the day but continues loop.
      continue;
    } else if (parseFloat(thisWeekHoursArray[i]) >= 7.5) { //checks if shift is longer than 7.5 hours.
      thisWeekHoursArray[i] = thisWeekHoursArray[i] - 0.5; //removes 0.5 hours unpaid break.
    }
    thisWeeksSum = thisWeeksSum + parseFloat(thisWeekHoursArray[i]); //each new number in array is added to thisWeeksSum.
  }

  return thisWeeksSum;

}

/**
 * Calculates and returns overtime hours using output from addWeek() and contract hours form input.
 */
function calculateOvertime(week) {

  var contractHours = document.getElementById('contract-hours').value;
  let hoursWorked = addWeek(week);
  let overtime = 0;

  //if the hours worked (from addWeek) is greater than contract hours then overtime.
  if (hoursWorked >= contractHours) {
    overtime = hoursWorked - contractHours;
  }

  return overtime;

}

/**
 * Calculates total pay from above functions and form inputs. 
 */
function calculateTotal() {

  var wage = getWage();
  var holidayHours = parseInt(document.getElementById('holiday-hours').value);
  var owedOvertimeHours = (parseInt(document.getElementById('owed-overtime').value)) / wage;
  let totalHours = addWeek('week1') + addWeek('week2') + addWeek('week3') + addWeek('week4') + holidayHours;
  let nextPayOvertime = calcuateOvertime('week3') + calcuateOvertime('week4');
  let thisPay = ((totalHours + owedOvertimeHours - nextPayOvertime) * wage).toFixed(2);
  let nextPay = ((calcuateOvertime('week3') + calcuateOvertime('week4')) * wage).toFixed(2);


}