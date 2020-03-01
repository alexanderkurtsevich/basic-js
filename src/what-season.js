module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!'
  }
  else if (isNaN(Number(date))) {
    throw new "Error"();
  }
  else {
    return (date.getMonth() < 2 || date.getMonth() == 11) ? 'winter' : (date.getMonth() < 5) ? 'spring' : (date.getMonth() < 8) ? 'summer' : 'autumn'
  }
};
