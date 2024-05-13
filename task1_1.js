const oneDay = 1000 * 60 * 60 * 24;

function daysBetweenDates(date1, date2) {
  return Math.floor(Math.abs(date2 - date1) / oneDay);
}

export default daysBetweenDates;
