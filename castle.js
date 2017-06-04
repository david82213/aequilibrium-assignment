function castleCount(arr) {
  let count = 0;

  // returns 0 if arr is empty
  if (!arr.length) {
    return count;
  }

  // returns 1 if arr only contains 1 element
  if (arr.length == 1) {
    return ++count;
  }

  // removing the duplicated consecutive elements
  let sortedArr = sortLand(arr);

  for (let i = 0; i < sortedArr.length; i++) {
    // can always build on first element of array
    if (i == 0) {
      count++;
    } else {
      let pre = sortedArr[i-1];
      let current = sortedArr[i];
      let next;

      // check if current index is last one
      // if not, next can be assigned
      // if yes, end for loop
      if (i+1 < sortedArr.length) {
        next = sortedArr[i+1];
      } else {
        break;
      }

      // check if conditions are met for valley or peak
      if ((current < pre && current < next) || (current > pre && current > next)) {
        count++;
      }
    }
  }
  return count;
}

function sortLand(arr) {
  let temp = arr[0];
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    // if current value is same as preceding value
    if (arr[i] == temp) {
      // remove the element
      arr.splice(i, 1);
      length--;
      i--;
      continue;
    }
    temp = arr[i];
  }
  return arr;
}

console.log(castleCount([2,6,7,8,9,7,9]));
