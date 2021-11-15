# Orpan Process
A process without a parent process is called orphan process 
```c

// A C program to demonstrate Orphan Process. 
// Parent process finishes execution while the
// child process is running. The child process
// becomes orphan.
#include<stdio.h>
#include <sys/types.h>
#include <unistd.h>
  
int main()
{
    // Create a child process      
    pid_t pid = fork();
  
    if (pid > 0){
        printf(" parent process");
        printf("my id is %d \n",getpid());
    // Note that pid is 0 in child process
    // and negative if fork() fails
    }else if (pid == 0)
    {
        sleep(3);
        printf("in child process");
        printf("my id is %d",getpid());
        printf("my parent's id is %d",getppid());
    }
  
    return 0;
}
```