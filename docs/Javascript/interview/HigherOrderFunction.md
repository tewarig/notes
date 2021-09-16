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
```
