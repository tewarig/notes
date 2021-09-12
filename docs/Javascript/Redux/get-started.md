# getting started

first create a redux store
to create redux store directly import it from the redux package .

```js
import { createStore } from "redux";
```

createStore accepts 3 arguments

- first is the reducer
- initial value of the state (optional)
- middle ware funciton (optional)

```js
const reducer = (state, action) => {
  console.log("i was called");
  return reducer;
};

const store = createStore(reducer, 0);
```

we can also initalize the state inside the reducer itself ;

```js
const reducer = (state = 0, action) => {
  console.log("i was called");
  return reducer;
};
const store = createStore(reducer);
```

onces the store is created we will be using the subscribe methord to make changes in store

```js
store.subscribe(() => {
  console.log("current state", store.getState());
});
```
