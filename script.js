const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result = [];
  let current = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (sum + num <= n) {
      current.push(num);
      sum += num;
    } else {
      if (current.length > 0) {
        result.push(current);
      }
      current = [num];
      sum = num;
    }
  }

  // ✅ Push the last subarray after loop ends
  if (current.length > 0) {
    result.push(current);
  }

  return result;
};

const n = parseInt(prompt("Enter n:"), 10);
alert(JSON.stringify(divide(arr, n)));
