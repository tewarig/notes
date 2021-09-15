# Shadowing

here the redelecation of a variable shadow's the

```js
var a = 100;

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a); // a = 10
```

the output of this would be a = 100;
a has shadowed the value here.
but in case of let this does not happens
