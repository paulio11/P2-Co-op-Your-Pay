window.onload = populateCalendar();
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

  //if statement to correctly populate calendar and dates.
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

}
