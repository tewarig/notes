# Illegal Shadowing

if we try to shadow a var using a let or a let using a var it is called illegal shadwoing.

```js
let a = 20;
{
  var a = 20;
}
```
