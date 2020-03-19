module.exports = function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  let result = '';
  let add = '';

  for (let i = 0; i < additionRepeatTimes; i++) {
    (i === additionRepeatTimes - 1) ?
    add += addition :
    add += addition + additionSeparator;
  }

  for (let i = 0; i < repeatTimes; i++) {
    (i === repeatTimes - 1) ?
    result += str + add :
    result += str + add + separator;
  }

  return result;
};
