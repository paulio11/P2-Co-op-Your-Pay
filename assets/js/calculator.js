//populates calendar on page load.
window.onload = populateCalendar();

//populates calendar again if form input is changed.
document.getElementById('pay-period').addEventListener('change', populateCalendar);

//add event listener to form submit button -> run handleSubmit.
let payForm = document.getElementById('pay-form');
payForm.addEventListener('submit', handleSubmit);

//add event listener to form clear button > run hideResults.
let clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', hideResults);

//add event listener to test button > run fillForm.
let testBtn = document.getElementById('test-data');
testBtn.addEventListener('click', fillForm);

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
  const period202210 = [28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]; //28 August 2022 - 24 September 2022
  const period202211 = [25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]; //25 September 2022 - 22 October 2022
  const period202212 = [23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]; //23 October 2022 - 19 November 2022
  const period202213 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]; //20 November 2022 - 17 December 2022

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
  } else if (payPeriodValue == '202210') {
    selectedPeriod = period202210;
    weekNumbers = [35, 36, 37, 38];
    payday = '22nd September';
    nextPayday = '20th October';
  } else if (payPeriodValue == '202211') {
    selectedPeriod = period202211;
    weekNumbers = [39, 40, 41, 42];
    payday = '20th October';
    nextPayday = '17th November';
  } else if (payPeriodValue == '202212') {
    selectedPeriod = period202212;
    weekNumbers = [43, 44, 45, 46];
    payday = '17th November';
    nextPayday = '15th December';
  } else if (payPeriodValue == '202213') {
    selectedPeriod = period202213;
    weekNumbers = [47, 48, 49, 50];
    payday = '15th December';
    nextPayday = '12th January';
  }

  //looks at last digit of date number and adds correct suffix to the string.
  //arrow function code from friend Dan Oak.
  const dateSuffix = (date) => {
    var dateString = date.toString();
    var lastDigit = dateString.slice(-1);
    var secondLast = dateString.length > 1 ? dateString.slice(-2, -1) : null;
    //for dates 11th, 12th, and 13th.
    //this is my addition, fixing an oversight in his code.
    if (secondLast && secondLast == '1') return 'th';
    if (lastDigit == '1') return 'st';
    if (lastDigit == '2') return 'nd';
    if (lastDigit == '3') return 'rd';
    return 'th';
  };

  //populates empty calendar with correct dates from array into <span class="date">.
  let dates = document.getElementsByClassName('date');
  for (let i = 0; i < dates.length; i++) {
    dates[i].innerHTML = selectedPeriod[i] + dateSuffix(selectedPeriod[i]);
  }

  //populates weeks with correct numbers from array into <span class="week-number">.
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

  let thisWeek = document.getElementById(week);
  let thisWeekHours = thisWeek.getElementsByClassName('hours');
  let thisWeekHoursArray = [];
  let thisWeeksSum = 0;

  //for loop that looks at each <span class="hours"> in a week and pushes to array then adds to return thisWeeksSum.
  for (let i = 0; i < 7; i++) {
    thisWeekHoursArray.push(thisWeekHours[i].value);
    //if NaN/empty it skips the day but continues loop.
    if (isNaN(parseFloat(thisWeekHoursArray[i]))) {
      continue;
    }
    //checks if shift is longer than 7.5 hours.
    else if (parseFloat(thisWeekHoursArray[i]) >= 7.5) {
      //removes 0.5 hours unpaid break.
      thisWeekHoursArray[i] = thisWeekHoursArray[i] - 0.5;
    }
    //each new number in array is added to thisWeeksSum.
    thisWeeksSum = thisWeeksSum + parseFloat(thisWeekHoursArray[i]);
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
  //overtime is in money, so divide by wage to get hours.
  var owedOvertimeHours = (parseInt(document.getElementById('owed-overtime').value)) / wage;
  //adds the result of addWeek for each of the 4 weeks and holiday hours.
  let totalHours = addWeek('week1') + addWeek('week2') + addWeek('week3') + addWeek('week4') + holidayHours;
  //adds overtime for week 3 and week 4
  let nextPayOvertime = calculateOvertime('week3') + calculateOvertime('week4');
  //adds hours and owed overtime, subtracts week 3 and 4 overtime, multiplies by wage.
  let thisPay = ((totalHours + owedOvertimeHours - nextPayOvertime) * wage).toFixed(2);
  //adds overtime for week 3 and week 4, multiplies by wage.
  let nextPay = ((calculateOvertime('week3') + calculateOvertime('week4')) * wage).toFixed(2);

  //populates relevant spans in results.
  let hoursSpan = document.getElementById('hours-worked');
  hoursSpan.innerHTML = totalHours;
  let estimatedSpan = document.getElementById('estimated-pay');
  estimatedSpan.innerHTML = '£' + thisPay;
  let overtimeSpan = document.getElementById('next-overtime');
  overtimeSpan.innerHTML = '£' + nextPay;

}

/**
 * Intercepts submission of form.
 */
function handleSubmit(event) {

  event.preventDefault();
  populateCalendar();

  let resultsDiv = document.getElementById('results');
  //unhides results div.
  resultsDiv.style.display = "block";
  //scrolls down to results
  location.href = "#results";

  calculateTotal();

}

/**
 * Clicking the clear form button will also hide the results div.
 */
function hideResults() {

  let resultsDiv = document.getElementById('results');
  resultsDiv.style.display = "none";
  //scrolls back to top
  location.href = "#";

}

/**
 * Temporay function, fill form with data for testing.
 */
function fillForm() {

  document.getElementById('tl').checked = true;
  document.getElementById('london').checked = true;
  document.getElementById('contract-hours').value = 16;
  document.getElementById('holiday-hours').value = 8;
  document.getElementById('owed-overtime').value = 172.53;
  document.getElementsByClassName('hours')[0].value = 8;
  document.getElementsByClassName('hours')[2].value = 8;
  document.getElementsByClassName('hours')[3].value = 7;
  document.getElementsByClassName('hours')[4].value = 9;
  document.getElementsByClassName('hours')[6].value = 8;
  document.getElementsByClassName('hours')[7].value = 8;
  document.getElementsByClassName('hours')[8].value = 10;
  document.getElementsByClassName('hours')[11].value = 8;
  document.getElementsByClassName('hours')[12].value = 6;
  document.getElementsByClassName('hours')[13].value = 6;
  document.getElementsByClassName('hours')[15].value = 8;
  document.getElementsByClassName('hours')[16].value = 10;
  document.getElementsByClassName('hours')[17].value = 8;
  document.getElementsByClassName('hours')[19].value = 8;
  document.getElementsByClassName('hours')[20].value = 7;
  document.getElementsByClassName('hours')[21].value = 7;
  document.getElementsByClassName('hours')[24].value = 8;
  document.getElementsByClassName('hours')[25].value = 6.5;
  document.getElementsByClassName('hours')[26].value = 9;
  document.getElementsByClassName('hours')[27].value = 8;

}