# Dispatch

Dispatch is a function given to us by Redux, and lets us trigger actions.

The action contains a type, and a payload. The type is typically just a string with the name of the action. The payload contains data we need to know about. For example, we can’t deposit any money without knowing the amount

how to make dispatch work ?
it is used to make changes in the state

it also take a type arugument which tells the reducer what to do?

```js
import { createStore } from "redux";

const reducer = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }

  return state;
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log("current state", store.getState());
});

store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "DECREMENT",
});
```

instead of using if else inside the dispatch we can use switch it will work fine and make code much assable

```js
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
```

now instead of increasing the counter by one we can pass payload it will help to imporve the counter and will make our code easy to read.

```js
import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log("current state", store.getState());
});

store.dispatch({
  type: "INCREMENT",
  payload: 1,
});

store.dispatch({
  type: "INCREMENT",
  payload: 5,
});

store.dispatch({
  type: "DECREMENT",
  payload: 2,
});
```

for more check out redux docs they are awesome
https://redux.js.org/tutorials/essentials/part-1-overview-concepts
