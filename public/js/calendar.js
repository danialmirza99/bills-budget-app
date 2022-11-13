
// const costObj = [
//   {
//       "title": "bill",
//       "start": "2022-11-10"
//   }
// ]

//fs.readFileSync('../json/bills.json');
// yy-mm-dd
let today = new Date ();
let month = today.getMonth()+1;
let day = today.getDate();
let year = today.getFullYear();
let date = `${year}-${month}-${day}`
    console.log(date);

document.addEventListener('DOMContentLoaded', function() {
    

    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialDate: date,
      editable: true,
      selectable: true,
      businessHours: true,
      dayMaxEvents: true,
      events: 
      [

      ]
    });

    

    calendar.render();
  });