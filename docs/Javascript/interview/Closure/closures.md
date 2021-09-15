# Closures

a function along with it's outer scope is called closure.
Closure is basically a function along with it's lexical scope bundled together is called Closure.

```js
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();
```

closure basically gives you the access of outer function's scope from the inner function.

- when functions are returned they still maintain their lexical scope

```js
function x() {
  var a = 7;
  return function y() {
    console.log(a);
  };
}
x();
```

# guess the output

value of a ?

```js
function x() {
  var a = 7;
  return function y() {
    console.log(a);
  };
  a = 100;
  return y;
}
x();
```

in this case value of a woule be 100;

- module design pattern
- curring
- function like ones (higer order functions)
- memoize
- maiting state in async world
- setTimeouts
- iterators
- data hiding and encluption

data hiding
like other functions and peices of code don;t have access to it.

```js
var counter = 0;
function incrementCounter() {
  count++;
}

function counter() {
  var counter = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}
var counter1 = counter();
counter1(); //1
counter1(); //2
var counter2 = counter();
counter1(); //1
// now it some of from the out side the code will access it it will give error
```

# make a counter

```js
function Conter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}
var counter1 = new Counter();
counter1.incrementCounter();
counter1.decrementCounter();
```

# time ,tide and js waits for none
