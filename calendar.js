/* Load List event dynamically */

const loadEvents = (listEvents) => {
  const calendar = document.querySelector('.calendar');
  listEvents.forEach((row) => {
    const liRow = document.createElement('li');
    liRow.classList.add('row', 'border-bottom');

    const pTime = document.createElement('p');
    pTime.textContent = row.time;
    pTime.classList.add('date');

    const ulListEvent = document.createElement('ul');
    ulListEvent.classList.add('list-event');

    row.events.forEach((event) => {
      const liEvent = document.createElement('li');
      if (event.description === undefined) {
        liEvent.classList.add('flex-center', 'event-simple');
        liEvent.textContent = event.title;
        ulListEvent.append(liEvent);
        return;
      }

      liEvent.classList.add('event');

      const detail = document.createElement('div');
      detail.classList.add('event-detail');

      const title = document.createElement('div');
      title.classList.add('event-title', 'row');

      const icons = document.createElement('i');
      icons.classList.add('flex-center');

      const hTitle = document.createElement('h6');
      hTitle.classList.add('event-title');
      hTitle.textContent = event.title;

      const description = document.createElement('p');
      description.classList.add('event-description');
      description.innerHTML = event.description;

      const subDetail = document.createElement('div');
      subDetail.classList.add('event-subdetail');

      const localisation = document.createElement('p');
      localisation.classList.add('event-localisation');
      localisation.textContent = event.location;

      if (row.events.length === 1) {
        description.style.alignItems = 'center';
        liEvent.style.flexWrap = 'nowrap';
      } else {
        title.style.marginBottom = '10px';
        description.style.height = '150px';
        detail.style.flexDirection = 'column';
        subDetail.style.width = '100%';
      }

      switch (event.type) {
        case 'lecture': {
          liEvent.style.backgroundColor = '#DECDFF';
          icons.style.backgroundColor = '#7955BE';
          icons.classList.add('fa-sharp', 'fa-solid', 'fa-book');
          break;
        }
        case 'practice': {
          liEvent.style.backgroundColor = '#CED3FF';
          icons.style.backgroundColor = '#5268D9';
          icons.classList.add('fa-solid', 'fa-briefcase');
          break;
        }
        case 'discussion': {
          liEvent.style.backgroundColor = '#FFC9C9';
          icons.style.backgroundColor = '#DB5858';
          icons.classList.add('fa-solid', 'fa-comments');
          break;
        }
        case 'open-access': {
          liEvent.style.backgroundColor = '#D2E3FF';
          icons.style.backgroundColor = '#6386C0';
          icons.classList.add('fa-solid', 'fa-mug-hot');
          break;
        }
        case 'gift': {
          liEvent.style.backgroundColor = '#D2E3FF';
          icons.style.backgroundColor = '#6386C0';
          icons.classList.add('fa-solid', 'fa-gift');
          break;
        }
        case 'event': {
          liEvent.style.backgroundColor = '#ffcff7';
          icons.style.backgroundColor = '#C655B3';

          liEvent.style.paddingTop = '32px';
          liEvent.style.paddingBottom = '32px';
          icons.classList.add('fa-solid', 'fa-champagne-glasses');
          break;
        }

        default: {
          liEvent.style.backgroundColor = '#DECDFF';
          icons.style.backgroundColor = '#7955BE';
        }
      }

      /* Appends */
      title.append(icons, hTitle);
      detail.append(title, description);

      subDetail.append(localisation);

      liEvent.append(detail, subDetail);

      ulListEvent.append(liEvent);
    });

    /* Appends */
    liRow.append(pTime, ulListEvent);

    calendar.append(liRow);
  });
};

/* list of event that will be displayed on the calendar */
const listEvents = [
  { time: '09:30 - 10:00', events: [{ title: 'Registration' }] },
  {
    time: '10:00 - 10:10',
    events: [{ title: 'Opening Remarks' }, { title: 'Presentation' }],
  },
  {
    time: '10:00 - 10:40',
    events: [
      {
        title: 'Meeting Peers',
        type: 'open-access',
        description: 'Meet partner with which you will practice exercice',
        location: "Meeting room (Ticket's number)",
      },
    ],
  },
  { time: '10:40 - 11:00', events: [{ title: 'Break and Exploration' }] },
  {
    time: '11:00 - 13:00',
    events: [
      {
        title: 'Deep Work',
        type: 'lecture',
        description:
          'Rules for Focused Success in a Distracted World ? How to do more in less time. <br><br> Cal Newport',
        location: 'Main Auditoruim',
      },
      {
        title: "Try YOUR Deep Work's method",
        type: 'practice',
        description:
          "What's work for you ? And how to implemente it to your life ? <br><br> Practice with partners",
        location: "Practice Room (Ticket's number)",
      },
      {
        title: 'Atomic Habits',
        type: 'lecture',
        description:
          'How to use Micro habits to change your life in a long run ?',
        location: "Practice Room (Ticket's number)",
      },
    ],
  },
  { time: '13:00 - 14:00', events: [{ title: 'Lunch Break' }] },

  {
    time: '14:00 - 17:10',
    events: [
      {
        title: "SO Good They Can't Ignore You",
        type: 'lecture',
        description:
          "Why Skills Trump Passion in the Quest for Work You Love. How get irreplaceable skills and become so good they can't ignore you",
        location: 'Main Auditoruim',
      },
      {
        title: 'Open Discussion',
        type: 'discussion',
        description:
          'Discuss with your peers about how to implement these lesson in your life. Install our habis tracker app and follow your peers.',
        location: "Meeting room (Ticket's number)",
      },
    ],
  },
  { time: '17:10 - 17:30', events: [{ title: 'Break' }] },
  {
    time: '17:30 - 18:30',
    events: [
      {
        title: '[How to use] Gift',
        type: 'gift',
        description:
          ' Receive incredible gift to help you become much more productive',
        location: 'Auditoruim A2',
      },
    ],
  },
  {
    time: '18:30 - 22:00',
    events: [
      {
        title: 'Goodbye Party',
        type: 'event',
        description: '  ',
        location: "Party's Room",
      },
    ],
  },
];

loadEvents(listEvents);
