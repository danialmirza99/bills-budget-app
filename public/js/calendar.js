let today = new Date ();
let month = today.getMonth()+1;
let day = today.getDate();
let year = today.getFullYear();
let date = `${year}-${month}-${day}`
    console.log(date);

document.addEventListener('DOMContentLoaded', async function() {
    // const userData = await User.findByPk(req.session.user_id, {
    //   attributes: {exclude: ['password']},
    //   include: {model: Item}
    // });
    // const user = userData.get({plain: true});
    // console.log(user);

    // document.location.replace('/calendar')

    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialDate: date,
      editable: true,
      selectable: true,
      businessHours: true,
      dayMaxEvents: true,
      events: 
    });

    

    calendar.render();
  });