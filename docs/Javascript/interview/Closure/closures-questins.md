- write a program to print n number from 1 to n in nth seconds

```
this would perfectly fine
function x() {
  for (let i = 1; i < 6; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
x();

```

but while using var it won't work

```
function x() {
  for (var i = 1; i < 6; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
x();

```

here the settimeout will make a copy of function and store it . in the referance of the var i .

- let has a block scope , it is a new copy of all let is created
  each time it is called it is creating a sperate copy of itself. or i is refering to a new memory location.

let is block scope ..

how to do it without var ?

```
function x() {
  for (var i = 1; i < 6; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}
x();

```

now it will create a new copy of i itslef :)

example of closure

```
function outer(){
   var a = 10;
    function inner(){
     console.log(a);
    }
    return inner;
}

//what are these for?
outer()();

//another way to do it
var close = outer();
close();

```

()() call the inner function :)

- how this will behave with argument ?

```
the parameter will form closer with the parameter as well :)
```

# disadvange ??

it can consume a lot of meomory as it is not garbage collected till the program expire.

if not handled properly it can lead to meomory leak.

# grabage collector

in browser/engine
the garbage collector will free the untilize space in the memory.

whever their is un used variable it will free up the meomory.

Relation b/w garbage collector and function ?

```js
function a() {
  var x = 0;
  return function b() {
    console.log(x);
  };
}
var y = a();
```
