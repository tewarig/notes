# FORK
PROCESS - it is basically a program under execution

fork is used to create a child processs :)
    p1
   /   \  
  c1   c2
  fork always return the process id.
 
 # Fork can return either a zero value or a positive value  or a negative value 
 # -ve value 
 - if it return negative value the it means their is unsucessful excution of fork i.e. no child process is created 
 # Zero value
 - it means the child process is being created
 # +ve value
 - it means the child process is being created and it returns the process id of the procress

//give the output of the code

```c
main(){
    fork()
    printf("hello");
}
```

// this will print hello for two times one for parent and one for the child



```c
main(){
    fork()
    fork()
    printf("hello");
}
```
// this will print hello for 4 times

- to find how many times it would be printed
 # 2^n  
- to find the total number of child process
 # 2^n - 1

 # How to implement fork system call ?

 when ever the fork is called it will create a clone of it what ever is written downward of it.

 ```c
 // for standard input and output
 #include <stdio.h>
 // for the system calls
 #include <unistd.h>

 int main(){
     fork();
     printf("today is friday");
 }

 ```
 ```
 output

  gauravtewari@Gauravs-MacBook-Air  ~/Desktop/os/fork  ./a.out                                                                                                                         ✔  534  21:36:05
today is fridaytoday is friday%                                                                                                                                                                              
 ```

 main system call will print first after that the child call call would print it
 output
 ```
meow meow it works 
today is friday 
today is 22 oct 
today is friday 
today is 22 oct 
today is 22 oct 
today is 22 oct 
 ```


# Parent Process Computes the SUM OF EVEN and Child Process Computes the sum of ODD NUMBERS using fork

```c
#include<stdio.h>
//for using the fork 
#include<unistd.h>
//for exit function
#include<stdlib.h>
//to call states of particular processs
#include<sys/types.h>
#include<sys/wait.h>
//this limits and interger array
#define 20
 
```