module.exports = function getSeason( date ) {
  
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Not [object Date]');
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const month = date.getMonth();

  if (month >= 0 && month < 2 || month === 11) {
    return seasons[0];
  } else if (month > 1 && month < 5) {
    return seasons[1];
  } else if (month > 4 && month < 8) {
    return seasons[2];
  } else if (month > 7 && month < 11) {
    return seasons[3];
  }
};
