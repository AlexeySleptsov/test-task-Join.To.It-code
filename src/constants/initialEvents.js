import moment from 'moment';

import {UIDv4} from 'utils';

const initialEvents = [
  {
    id: UIDv4(),
    title: 'Party',
    start: moment().add(2, 'days')._d,
    end: moment().add(2, 'days')._d,
    type: 'birthday',
    allDay: true,
    notes: '123',
  },
  {
    id: UIDv4(),
    title: 'Walking',
    start: moment().startOf('hour')._d,
    end: moment().endOf('hour')._d,
    type: 'personal',
    notes: '1234',
  },
  {
    id: UIDv4(),
    title: 'Lunch',
    start: moment().set({
      hour: 15,
      minute: 30,
    })._d,
    end: moment().set({
      hour: 17,
      minute: 0,
    })._d,
    type: 'reminder',
    notes: '12345',
  },
  {
    id: UIDv4(),
    title: 'Meeting',
    start: moment()
      .add(4, 'days')
      .set({
        hour: 12,
        minute: 0,
      })._d,
    end: moment()
      .add(4, 'days')
      .set({
        hour: 15,
        minute: 30,
      })._d,
    type: 'meeting',
    notes: '123456',
  },
];

export default initialEvents;
