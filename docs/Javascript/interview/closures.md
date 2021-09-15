# Closures

Closure is basically a function along with it's lexical scope bundled together is called Closure.

```
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();
```

closure basically gives you the access of outer function's scope from the inner function.

- when functions are returned they still maintain their lexical scope

```
function x(){
    var a = 7;
    return function y(){
        console.log(a);
    }
}
x();
```

# guess the output

value of a ?

```
function x(){
    var a = 7;
    return function y(){
        console.log(a);
    }
    a = 100;
    return y;
}
x();
```

in this case value of a woule be 100;

- module design pattern
- curring
- function like ones
- memoize
- maiting state in async world
- setTimeouts
- iterators

# time ,tide and js waits for none
