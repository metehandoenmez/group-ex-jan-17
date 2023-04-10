let data = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

// function howToSort(a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else if (a === b) {
//     return 0;
//   }
// }

// function howToSort(a, b) {
//   return a - b;
// }

function doSort(dataArr) {
  dataArr.sort((a, b) => a - b);
  console.log(dataArr);
}

function getTotal(arr) {
  var total = 0;
  for (let i = 0; i < arr.length; i = i + 1) {
    total = total + arr[i];
  }
  return total;
}

// function isEven(nr) {
//   return nr % 2 === 0;
// }

function isEven(nr) {
  if (nr % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function getOdds(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (!isEven(element)) {
      result.push(element);
    }
  }
  return result;
}

function getEvens(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (isEven(element)) {
      result.push(element);
    }
  }
  return result;
}

doSort(data);

let actualTotal = getTotal(data);
console.log(actualTotal);
if (isEven(actualTotal)) {
  console.log("Array total is Even");
} else {
  console.log("Array total is Odd");
}

console.log(getOdds(data));
console.log(getEvens(data));
