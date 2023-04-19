let data = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

console.log(data);


function checkLarger(a, b) {
  if (a > b) {
    return 1;
  }
  else if (a < b) {
    return -1;
  }
  else
    return 0;
}

/*-------------------------------------------------------*/

function sortArray() {
  data.sort(checkLarger);
  console.log(data)
} 
sortArray();

/*-------------------------------------------------------*/

function getTotal() {
  let total=0;
  for (let i = 0; i < data.length; i++) {
    total+= data[i];
  }
  return total;
}
console.log(getTotal());

/*-------------------------------------------------------*/

function checkTotal() {
  total = getTotal();
  if (total%2===0) {
    console.log("Array is even.")
    return true;
  }
  else {
    console.log("Array is odd.")
    return false;
  }
  }
checkTotal();

/*-------------------------------------------------------*/

function isEven(num) {
  if (num % 2 === 0) {
    return 1;
  } else {
    return 0;
  }
}

function onlyOdds(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (!isEven(element)) {
      result.push(element);
    }
  }
  return result;
}
