module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = 1;

  for (let i = 1; i < disksNumber; i++) {
    result = result * 2 + 1;
  }
  
  return {
    turns: result,
    seconds: result / (turnsSpeed / (60 * 60))
  };
};
