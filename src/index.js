module.exports = function multiply(first, second) {
  let firstArr = first.split('').reverse();
  let secondArr = second.split('').reverse();

  let mult = [];

  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      let c = firstArr[i] * secondArr[j];
      mult[i + j] = (mult[i + j]) ? mult[i + j] + c : c;
    }
  }
  for (var i = 0; i < mult.length; i++) {
    let num = mult[i] % 10;
    let move = Math.floor(mult[i] / 10);
    mult[i] = num;

    if (mult[i + 1])
      mult[i + 1] += move;
    else if (move != 0)
      mult[i + 1] = move;
  }

  return mult.reverse().join('');
}
