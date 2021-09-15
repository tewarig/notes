# Hoisting

Hoisting is JavaScript's default behavior of moving
all declarations to the top of the current scope (script or function).
Be carefull that only declaration gets hoisted NOT the initialitations

```js
var x = 5;
alert("x is  = " + x + ". y is = " + y); //result => x is = 5. y is = undefined.
var y = 7;
```

note that the code doesn't produce the error "y is not defined" like
it would if we would omit y. It executes but not in the way you would want.
