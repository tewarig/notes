# Stack in js

![stack](https://inchilly.sirv.com/notes/stack/Notes_210728_184915_1.jpg)
![stack](https://inchilly.sirv.com/notes/stack/Notes_210728_184915_3.jpg)
![stack](https://inchilly.sirv.com/notes/stack/Notes_210728_184915_2.jpg)

# stack impelmentation using class in js

```javaScript

class Stack{
   count = 0;
   storage = {};

   push = (value) => {
   this.storage[this.count] = value;
   this.count++;
  }
  pop = () => {
   if(this.count === 0){
     return undefined;
    }
   this.count --;
   var result = this.storage[this.count];
   delete this.storage[this.count];
   return result;

 }
  size = () => {
  return this.count;
 }
 peek = () => {
   return this.storage[this.count -1];
 }





}


var mystack = new Stack();
mystack.push(1);
mystack.push(2);
console.log(mystack.pop());
console.log(mystack.peek());

```

# Question

how to check a number is a pallandrome or now in js?

```javaScript
let letters = [];
var words = "level";

var reverseWords = "";

for(let i=0;i<words.length;i++)
{
 letters.push(words[i]);
}
for(let j=0;j<words.length;j++)
{
  reverseWords += letters.pop();
}
if(reverseWords === words){
  console.log(words+"is a pallandrome");

}

```
