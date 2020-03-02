function computeSum(num, factor, ratio) {
  let result = factor;
  let sum = ratio * factor;
  for (let i = 1; i < num; i++) {
    result += sum;
    sum *= ratio;
  }
  return result;
}

module.exports = computeSum;
