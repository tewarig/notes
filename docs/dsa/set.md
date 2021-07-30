# what is set..

set is basically an implemetation of array but is generally have unique values..

# when can we use set ?

for example when we want to store username .
then we can store it in a set.

# real life usage

```js
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet.has(4));
//how to iterate through a set ?
for (let value of mySet) {
  console.log(value);
}

//how to map through it ?
// const array = mySet.map((value) => value * 2);
i did tried but remember son you cannot map through a set in js
for array to wored but not set.



mySet.size()
to check the size.

mySet.delete(3);
to delete it : )
```
