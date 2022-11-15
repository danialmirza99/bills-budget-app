let today = new Date ();
let month = today.getMonth()+1;
let day = today.getDate();
let year = today.getFullYear();
let date = `${year}-${month}-${day}`


document.addEventListener('DOMContentLoaded', async function() {

    var calendarEl = document.getElementById('calendar');

    const response = await fetch( '/api/calendar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    const info = await response.json();
    let authInfo;
    if (info == 'null'){
      authInfo = {}
    }
    else{
      authInfo = info;
    }

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialDate: date,
      selectable: true,
      businessHours: true,
      dayMaxEvents: true,
      events: authInfo
    });

    

    calendar.render();
  });