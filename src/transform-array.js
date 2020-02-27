module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('"arr" in not an Array');
  }

  if (!arr.length) {
    return arr;
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    
    switch (arr[i]) {
      case '--double-next':
        (i < arr.length - 1) ? newArr.push(arr[i + 1]) : i;
        break;
      case '--double-prev':
        (i > 0) ? newArr.push(arr[i - 1]) : i;
        break;
      case '--discard-next':
        (i < arr.length - 1) ? i++ : i;
        break;
      case '--discard-prev':
        (newArr.length > 0) ? newArr.pop() : i;
        break;
      default:
        newArr.push(arr[i]);
        break;
    }
  }

  return newArr;
};
