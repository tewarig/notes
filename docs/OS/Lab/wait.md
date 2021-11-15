# Wait system call
how does wait system call works ?


```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main(){

    // it can be any positive or non negative number 
    int pid = fork();
    //if pid is zero the child process is created
    if(pid == 0){
        //get pid get's the id of the paricular process
        //get ppid get's the id of the parent's process
        printf(" child process id : %d has parent id : %d  \n", getpid(),getppid());
    }else if(pid > 0){
        printf(" parent process id : %d has  grand parent id : %d  \n", getpid(),getppid());
  
    }else{
        printf("process has not been created \n");
    }
}

 /* gauravtewari@Gauravs-MacBook-Air  ~/Desktop/os/wait  .aout                                                                                                                         ✔  626  12:13:48
 parent process id : 67596 has  grand parent id : 57026  
 child process id : 67598 has parent id : 1  
 */
```
 here parent is executing first then child is executing 
 for this we can use  wait () system call

 ```c
 #include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main(){

    // it can be any positive or non negative number 
    int pid = fork();
    //if pid is zero the child process is created
    if(pid == 0){
        //get pid get's the id of the paricular process
        //get ppid get's the id of the parent's process
        printf(" child process id : %d has parent id : %d  \n", getpid(),getppid());
    }else if(pid > 0){
        wait(NULL);
        printf(" parent process id : %d has  grand parent id : %d  \n", getpid(),getppid());
  
    }else{
        printf("process has not been created \n");
    }
}
/*
 gauravtewari@Gauravs-MacBook-Air  ~/Desktop/os/wait  ./a.out                                                                                                                         ✔  631  12:17:32
 child process id : 68506 has parent id : 68504  
 parent process id : 68504 has  grand parent id : 57026  
*/
 ```

 sleep will put a program on hold and after that other processes would be executed
 ```c
  #include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main(){

    // it can be any positive or non negative number 
    int pid = fork();
    //if pid is zero the child process is created
    if(pid == 0){
        //get pid get's the id of the paricular process
        //get ppid get's the id of the parent's process
        wait(5);
        printf(" child process id : %d has parent id : %d  \n", getpid(),getppid());
    }else if(pid > 0){
        wait(NULL);
        printf(" parent process id : %d has  grand parent id : %d  \n", getpid(),getppid());
  
    }else{
        printf("process has not been created \n");
    }
}

 ```