<!-- # LAB
- problem statment
- concept
- coding part / algo and flow chart
- output

fcfc
shortes job fist -->
# PIPE
Pipe is basically used to pass information between the programs.
It is uniDirectional in nature.
for two way communication we can setup two pipes
both for each direction

int fd[2];
here fd[0] is for the read end
and fd[1] is for the write end

```c

// C program to illustrate
// pipe system call in C
#include <stdio.h>
#include <unistd.h>
#define MSGSIZE 16
char* msg1 = "hello, world #1";
char* msg2 = "hello, world #2";
char* msg3 = "hello, world #3";
  
int main()
{
    char inbuf[MSGSIZE];
    int p[2], i;
  
    if (pipe(p) < 0)
        exit(1);
  
    /* continued */
    /* write pipe */
  
    write(p[1], msg1, MSGSIZE);
    write(p[1], msg2, MSGSIZE);
    write(p[1], msg3, MSGSIZE);
  
    for (i = 0; i < 3; i++) {
        /* read pipe */
        read(p[0], inbuf, MSGSIZE);
        printf("% s\n", inbuf);
    }
    return 0;
}
```


```
#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>
#include<string.h>
#include<sys/types.h>

int main()
{
    pid_t pid;
    char arr[100],str[100];
    int fd[2],nbr,nbw;

    pipe(fd); //Creating a pipe
    pid=fork(); //Calling fork to create a child process
    
		if(pid==0)
    {
        printf("\nEnter a string: ");
        gets(str);
        nbw=write(fd[1],str,strlen(str));
        printf("Child wrote %d bytes\n",nbw);
        exit(0);
    }
    else
    {
        nbr=read(fd[0],arr,sizeof(arr));
        arr[nbr]='\0';
        printf("Parent read %d bytes: %s\n",nbr,arr);
    }

    return 0;
}
```