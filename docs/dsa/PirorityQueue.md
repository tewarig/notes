# Prirority Queue

what it difference between queue and a prirority queue ?
well i prirority queue also takes a number which is the priority of that number and it would take

```js


class PQueue{

   class PQueue{

    collection = [];
    print = () =>{
        console.log(this.collection);
    }
    isEmpty = () =>{
        return this.collection.length === 0 ? 1 : 0 ;
    }
    enqueue = (element) => {

        if(this.isEmpty()){
         this.collection.push(element);
        }else{
            let isAdded = false;
            for(let i=0;i<this.collection.length;i++)
            {
                if(element[1]<this.collection[i][i]){
                    this.collection.splice(i,0,element);
                    isAdded = true;
                    break;
                }
            }
            if(!isAdded){
                this.collection.push(element);
            }
        }
    }

    dequeue = (element) => {
        if(isEmpty()){
            return -1;
        }else{
          let value = this.collection.shift();
          return value[0];
        }
    }
    front = () => {
        return this.collection[0];
    }
    size = () =>{
        return this.collection.length;
    }


}

let pqueue = new PQueue();
pqueue.enqueue(['Gaurav',5]);
pqueue.enqueue(['Tewari',1]);
pqueue.print();
console.log(pqueue.isEmpty());
pqueue.enqueue(['js',10]);
pqueue.print();

```

```js
[
  ["Gaurav", 5],
  ["Tewari", 1],
];

(0)[(["Gaurav", 5], ["Tewari", 1], ["js", 10])];
```
