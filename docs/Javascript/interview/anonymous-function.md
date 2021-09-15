# Anonymous Function

A function without a name is know as Anonymous function :)

```js
function (){
    console.log("dndbnldbndbnl");
}
```

they are used in a placed where function are used as an value.

# Named function Expression

```js
var b = function xyz() {
  console.log("i was called");
};
b(); //this will run
xyz(); // this won't
```

# Prams v/s Aguments

// params

```js
var b = function (params1, params2) {
  // here params1 and params 2 are the local varibles :)

  console.log("these are paramaters");
};

//arguments are which we will pass over here..
b(1, 2);
```

# first class functions

The ability of passing functions as arguments or parameters is know as first class functions
when they are treated as values

functions are first class citizens
