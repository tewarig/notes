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
