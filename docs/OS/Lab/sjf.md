# Shortest Job First
here we just need to print the process with the shortest time first.

- just use the fifo program and implement sorting as well this will get the job done :)
```c
# include <stdio.h>
# include <string.h>
int main(){
    int process[10];
    int processTime[10];
    char processName[10][5];
    char temp[5];
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
    
    for(int i=0;i<number-1;i++){
        for(int j=i+1;j<number;j++){
            if(processTime[i]>processTime[j]){
                // to swap processes
                int temp = processTime[i];
                processTime[i] = processTime[j];
                processTime[j] = temp;
                
                // to swap processes namespace
                strcpy(temp,processName[i]);
                strcpy(processName[i],processName[j]);
                strcpy(processName[j],temp);

                
            }
        }
        
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