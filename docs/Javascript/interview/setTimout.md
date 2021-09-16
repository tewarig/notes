# Set Timeout

settimeout have trust issues :(

```js
console.log("Start");
setTimeout(() => {
  console.log("Meow");
}, 5000);

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date.getTime();
}
console.log("finally");
```
