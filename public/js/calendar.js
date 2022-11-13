// const fs = require("fs");

// let costObj = fs.readFileSync('../json/bills.json');

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialDate: '2022-11-13',
      editable: true,
      selectable: true,
      businessHours: true,
      dayMaxEvents: true,
      events: [
        // costObj
      ]
    });

    

    calendar.render();
  });