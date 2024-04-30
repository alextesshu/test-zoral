import { google } from 'googleapis';

async function getBusyIntervals(calendarId, startTime, endTime, apiKey) {
  try {
    const calendar = google.calendar({ version: 'v3', auth: apiKey });

    const response = await calendar.events.list({
      calendarId: calendarId,
      timeMin: startTime.toISOString(),
      timeMax: endTime.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    const busyIntervals = [];
    const events = response.data.items || [];
    events.forEach(event => {
      const start = new Date(event.start.dateTime || event.start.date);
      const end = new Date(event.end.dateTime || event.end.date);
      busyIntervals.push({ start, end });
    });

    return busyIntervals;
  } catch (error) {
    console.error('Ошибка при получении событий:', error);
    return [];
  }
}

const calendarId = '0acae041770f2d53c81a575cbd58054aa82108a1ec12307c8ef5b81e617c51c5@group.calendar.google.com';
const apiKey = 'AIzaSyD8ALK2PVJRqWdyjSFsNGzdWBezxt69wdc'; 
const startTime = new Date('2024-04-30T00:00:00Z');
const endTime = new Date('2024-05-01T00:00:00Z');

getBusyIntervals(calendarId, startTime, endTime, apiKey)
  .then(busyIntervals => { console.log('Busy intervals:', busyIntervals)})
  .catch(error => { console.error('Error:', error)});


  