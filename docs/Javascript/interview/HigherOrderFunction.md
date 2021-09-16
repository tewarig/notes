# Higher Order Functions

A function which takes other functions as a argument is known as higher order function

```js
function x() {
  console.log("x was called");
}
function y(x) {
  x();
}
```

another example of Hof

```js
const radius = [3, 1, 2, 4];
//normal approch
const areaOfCircle = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.pi * radius[i] * radius[i]);
  }
  return output;
};
console.log(areaOfCircle(radius));
```

# Modular Programming

```js
const radius = [3, 1, 2, 4];
const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumcenter = function (radius) {
  return Math.PI * 2 * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};
const calculate = function (radius, height) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(length));
  }
  return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, circumcenter));
console.log(radius.map(area));

// how to add this function as a prototype  ??
 Array.prototype.calculate =


```

# Map

map is used to tranform an array and get a new value out of it.

# filter

filter function is basically used to filter ;)

```js
const arr = [1, 2, 3, 4, 5];
function isOdd(x) {
  return x % 2;
}
const output = arr.filter(isOdd);
console.log(output);
```

# reduce

it does not reduce anything

take aaray and reduce it to a simple thing

```js
const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
```

- how to find max using reduce

```js
const output = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
```
