# fifo
Fist in first out
take a arrray in and output the whole array :)

# Important Terms
- Arrival time: time at which process arrives in a queue.
- Avg waiting is the time till when a call remains in the queue utill it is executed. also known as avg decay.
- Completion Time: When a process starts executing
- Turn around Time: difference b/w completion time and arrival time.
- Waiting Time: difference b/w turn around time and arrival time.
```c
# include <stdio.h>

int main(){
    int process[10];
    int processTime[10];
    char processName[10][5];
    int turnAroundTime = 0;
    int avgTime = 0;
    int Time = 0;
    int number ;
    printf("Enter the number of process: \n");
    scanf("%d",&number);
    for(int i=0;i<number;i++){
    printf("Enter the name of %d process:\n",i+1);
    scanf("%s",&processName[i]);
    printf("Enter the process time:\n");
    scanf("%d",&processTime[i]);
    }
    
    // to print the process
    printf("------------------------------------------------------------------------------------------------\n");
    for(int i=0;i<number;i++){
        printf("\t %s ",processName[i]);
    }
    printf("\n------------------------------------------------------------------------------------------------\n");
     for(int i=0;i<number;i++){
        printf("\t %d ",processTime[i]);
    }
    printf("\n------------------------------------------------------------------------------------------------\n");
    
     for(int i=0;i<number;i++){
       Time += processTime[i];
       turnAroundTime += Time;
       int temp = processTime[i]-Time;
       if(temp<0){
           temp = temp * -1;
       }
       avgTime += temp;
       printf("\t %d",Time);
    }
    printf("\n TurnAroundTime:%d\n",turnAroundTime/number);
    printf("\n AvgTime: %d\n",avgTime/number);
    
    return 0;
}
```