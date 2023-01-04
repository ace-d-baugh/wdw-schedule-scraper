/*
================================================
; Title:  scrapper-code.js
; Author: Ace Baugh
; Date:   03 January 2023
; Description: Scrapper code
;================================================
*/

let rawData = document.getElementsByClassName('cal-day-panel');
let shifts = [];

for (var i = 0; i < rawData.length; i++) {
   // Show each date of raw data
	let dateString = rawData[i].getElementsByClassName('weekday-label-data')[0].innerHTML;
   
   if (!rawData[i].innerHTML.includes('No Shifts')) {
      let shiftsOfDay = rawData[i].getElementsByClassName('cal-week-schedule-item');
      for (var j = 0; j < shiftsOfDay.length; j++) {
         // Show each shift of each day
         let timeString = shiftsOfDay[j].getElementsByClassName('cal-week-shift-position')[0].innerText;
         let shiftName = shiftsOfDay[j].getElementsByClassName('ng-binding')[1].innerText;

         // Convert Date strings and Time string to start and end times
         let startAndEndTimes = convertDateAndTime(dateString, timeString);

         // Add shift to shifts array
         addShift(startAndEndTimes[0], startAndEndTimes[1], shiftName);
      }

   }
}

// Object class for each shift
class Shift {
   constructor(startTime, endTime, shiftName) {
      this.subject = shiftName;
      this.startDate = (startTime.getMonth() + 1) + '/' + startTime.getDate() + '/' + startTime.getFullYear();
      this.startTime = startTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
      this.endDate = (endTime.getMonth() + 1) + '/' + endTime.getDate() + '/' + endTime.getFullYear();
      this.endTime = endTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
   }
}

// Add new shift to shifts array
function addShift(startTime, endTime, shiftName) {
   let newShift = new Shift(startTime, endTime, shiftName);
   shifts.push(newShift);
}

// This function takes two time strings and returns the difference in hours
function timeDifference(time1, time2) {
   let time1Hours = parseInt(time1.slice(0,2));
   let time2Hours = parseInt(time2.slice(0,2));
   let time1Minutes = parseInt(time1.slice(3,5));
   let time2Minutes = parseInt(time2.slice(3,5));
   let time1TotalMinutes = (time1Hours * 60) + time1Minutes;
   let time2TotalMinutes = (time2Hours * 60) + time2Minutes;
   let timeDifference = time2TotalMinutes - time1TotalMinutes;
   let timeDifferenceHours = timeDifference / 60;
   return timeDifferenceHours;
}

// Convert Date strings and Time string to start and end times
function convertDateAndTime(dateString, timeString) {
   let time = timeString.split(' - ');
   let shiftLength = timeDifference(time[0], time[1]);
   let startTime = new Date(dateString + " " + time[0]);
   // endtTime is startTime + shiftLength
   let endTime = new Date(startTime.getTime() + (shiftLength * 60 * 60 * 1000));
   return [startTime, endTime];
}

// Convert shifts to cvs format
function convertToCSV(objArray) {
   let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
   let str = 'Subject,Start Date,Start Time,End Date,End Time' + '\r';

   for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index in array[i]) {
         if (line != '') line += ','
         line += array[i][index];
      }
      str += line + '\r';
   }
   return str;
}

// Copy shifts array to clipboard
copy(convertToCSV(shifts));

alert("Shifts copied to clipboard");