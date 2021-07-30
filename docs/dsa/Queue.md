# queue

what is a queue ?
queue is quite similar to the stack....
while a stack is first in last out
a queue is first in and first out (quite fair as life)

# where it is used?

    queue is used in a real life line examples.

```js
class Queue {
  collection = [];
  print = () => {
    console.log(this.collection);
  };
  enqueue = (element) => {
    this.collection.push(element);
  };
  dequeue = (element) => {
    return this.collection.shift();
  };
  front = () => {
    if (collection.length > 0) {
      return this.collection[0];
    } else {
      return -1;
    }
  };
  size = () => {
    return this.collection.length;
  };
  isEmpty = () => {
    return this.collection.length === 0 ? 1 : 0;
  };
}
let q = new Queue();
q.enqueue(5);
q.print();
q.enqueue(10);
console.log(q.size());
console.log(q.deueue);
q.print();
```
