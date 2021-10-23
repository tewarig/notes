# Zombie process 
A process which has finished the execution but still has entry in the process table to report to its parent process is known as a zombie process. A child process always first becomes a zombie before being removed from the process table. The parent process reads the exit status of the child process which reaps off the child process entry from the process table.

```c
# include <stdio.h>
# include <unistd.h>
# include <sys/wait.h>

int main(){
    int pid = fork();
    if(pid == 0){
        printf("child process id is: %d as parent id %d \n" ,getpid(),getppid());
    }else if(pid > 0){
        sleep(60);
        printf("parent process id is: %d as parent id %d \n" ,getpid(),getppid());
    }else{
        printf("process is not created");
    }
}


```

to check the process
```
ps -e -o pid,stat                                             
```