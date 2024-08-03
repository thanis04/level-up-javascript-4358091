// Write your code here
function coffeeDate(coffeeArr) {
  let coffeeSum = coffeeArr.reduce(
    (coffeeTotal, coffeeNum) => (coffeeTotal += coffeeNum)
  );
  return `The total bill is $${coffeeSum * 1.25}`;
}

console.log(coffeeDate([2, 3, 6, 9]));