# lexico Scope

if we are using a variable here inside a function ,if it does not have it will call the parent function check does it have it ? and if is does it would use that

- remember that ice-cream example
  an adult can give ice-cream to a child , but as a adult it cannot take ice cream from a child

```
const fullName = "Oluwatobi Sofela";

// Nested functions containing two more fullName variables:
function profile() {
  const fullName = "Tobi Sho";
  function sayName() {
    const fullName = "Oluwa Sofe";
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

```
