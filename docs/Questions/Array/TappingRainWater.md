# tapping rain water

will add notes after discussion

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let arr = height;
  let kadanes = [];
  let maxi = arr[0];
  kadanes.push(0);
  for (let i = 1; i < arr.length; i++) {
    maxi = Math.max(maxi, arr[i]);
    kadanes.push(maxi - arr[i]);
  }
  maxi = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    maxi = Math.max(maxi, arr[i]);
    let right = maxi - arr[i];
    kadanes[i] = Math.min(kadanes[i], right);
  }
  kadanes[arr.length - 1] = 0;

  let sum = 0;
  let total = 0;
  for (let i = 0; i < kadanes.length; i++) {
    sum += kadanes[i];
  }

  return sum;
  //your code here
};
```
