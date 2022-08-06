
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'ko',
      plugins: [ 'interaction', 'dayGrid' ],
      defaultDate: new Date(),
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: '교육일정입니다.',
          start: '2019-10-01'
        },
        {
          title: '교육일정입니다.',
          start: '2019-10-07',
          end: '2019-10-10'
        },
        {
          title: '미팅',
          start: '2019-09-10T12:00:00',
          end: '2019-09-12T12:30:00'
        },
        {
          title: '교육일정입니다',
          start: '2019-09-27T12:00:00'
        },
        {
          title: '미팅',
          start: '2019-09-12T14:30:00'
        },
        {
          title: '교육일정입니다',
          start: '2019-09-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2019-09-12T20:00:00'
        },
        {
          title: '교육일정입니다',
          start: '2019-09-13T07:00:00'
        },
        {
          title: '프린트히어로 업데이트',
          url: 'http://printhero.co.kr/',
          start: '2019-09-28'
        }
      ]
    });

    calendar.render();


    
  });