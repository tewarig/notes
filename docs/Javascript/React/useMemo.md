# use Memo
it is generally used when we are doing a heavy operaition . and the function is going to take a little bit of time while executing  then we would be going to use it.

use memo will memorize the function which is doing the heavy operation and remember it.

```javascript
let a = 5;
let b = 10;
console.log(a == b) // this will return true

let a = [1,2,3];
let b = [1,2,3];
console.log(a == b) // this will return false same would be for objects (they are compared based on their referance in case as well we can make use of useMemo when we don't want the componet to rerender in case of the object of the componet changes

```