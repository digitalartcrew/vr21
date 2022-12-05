const arrOfNums = [1, 2, 3, 4, 5];

const doubleNum = (num) => num * 2;

console.log(arrOfNums.map(doubleNum));

const map = (arr, callback) => {
  const results = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    const result = callback(arr[i]);

    results.push(result);
  }

  return results;
};

console.log(map(arrOfNums, doubleNum));
