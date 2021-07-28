# Test

test is use in js for searching a regex patter.
it is a selfish function so it would come first and the pattern which is to be matched would be comming after it : )

```js
let string = " Hello! my name is Gaurav ";
let search = /Gaurav/;
search.test(string);
```

one more thing to note test would return a boolean value

# OR operator in Regex

or operator here in Regex is same |

so if i have to search in a string i would type /meow|bark/

```js
let string = "meow meow !! i am a cat";
let search = /meow|cat/;
searc.test(string);
```

# how to ignore things ?

ignoring things in life is a important task !! but how we can thing in regex ? like lower case or upper case ?

by simply adding a "i" in the end

```js
let search = /meow/i;
```

# wildcard

it will match anything in place of that .

(let me explain )

/ca./ will match caa,cab,cat,..... any thing that is of 3 letters and start with ca.

what if i only want to match words betweeen [a-g] ? what should i do?
then use it .

```js
/ca[a-g]/;
```

will do that
