# Linklist

Basic link list implemention

```js
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
```

how to make a new node

```js
let main = new ListNode();
```

how to make a new next node

```js
let final = new ListNode();
main.next = final;
```

do remember to make main to main.next

```js
main = main.next;
```

# Questions

- [merge two sorted list](https://leetcode.com/problems/merge-two-sorted-lists/)
