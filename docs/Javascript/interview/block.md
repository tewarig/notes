# block

```js
// this is a block :)
{
}
```

- why we need it ?
  so, we can group these statements in a place where js expects only single statements :)

```js
if (true) true;

if (true) {
  let a = 10;
  console.log(a);
}
```

```js
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
```
