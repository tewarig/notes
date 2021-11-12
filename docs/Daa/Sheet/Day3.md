# Day 3

 This includes all sorting algorithms day 3 algorithms related to sorting would be included at the last.

 # Bubble Sort
 See bubble moves from bottom to the top so does the bubble sorting algorithm. 
here what is does is. let's divide bubble sort into parts 
1st passs the Maximum element will reach to the final position.
2nd pass the 2nd Maximum element will reach to the 2nd final position
3rd pass the 3rd maximum element will reach to the 3rd final positon
 
- Bubble sort is a sable sorting algo .. if we have two items it will never change their value.
```c++
#include<iostream>
using namespace std;

void bubbleSort(int arr[],int arrSize){
     
    for(int index = 0;index<arrSize-1;index++){
        for(int index2 = 0;index2 < arrSize-index-1;index2++){
            if(arr[index2]>arr[index2+1]){
                int temp = arr[index2];
                arr[index2] = arr[index2+1];
                arr[index2+1] = temp;
            }
             
        }
    }
  
}

int main(){
    
    int arrSize ;
    cin>>arrSize;
    int arr[arrSize];
    
    for(int index=0;index<arrSize;index++){
        cin>>arr[index];
    }
     
    cout<<"\n";
    bubbleSort(arr,arrSize);
    for(int index = 0;index <arrSize;index++){
        cout<<arr[index]<<" ";
    }
    
    
    return 0;
}
```

# SELECTION SORT
- It does less memory write compare to other algorithms
- CYCLE  sort it the most optimized algorithm
- Basic idea for heap sort
- Not stable is basic form (order of same elements might change)

- Basic Idea
 - Find out the 1st minimum element put it in the first position
 - Find out the 2nd minimum element put it in the second position
 - Find out the 3rd minimul element put it in the third position

 ```cpp
 #include<iostream>
using namespace std;

void bubbleSort(int arr[],int arrSize){
     
    for(int index = 0;index<arrSize-1;index++){
        for(int index2 = 0;index2 < arrSize-index-1;index2++){
            if(arr[index2]>arr[index2+1]){
                int temp = arr[index2];
                arr[index2] = arr[index2+1];
                arr[index2+1] = temp;
            }
             
        }
    }
  
}
void selectionSort(int arr[],int arrSize){
    for(int index = 0;index<arrSize -1;index++){
        int miniumNumber = index;
        for(int index2 = index + 1;index2<arrSize;index2++){
            if(arr[miniumNumber] > arr[index2]){
               miniumNumber = index2;
            }
        }
        swap(arr[miniumNumber],arr[index]);
       

        
    }
}
int main(){
    
    int arrSize ;
    cin>>arrSize;
    int arr[arrSize];
    
    for(int index=0;index<arrSize;index++){
        cin>>arr[index];
    }
     
    selectionSort(arr,arrSize);
    for(int index = 0;index <arrSize;index++){
        cout<<arr[index]<<" ";
    }
    
    
    return 0;
}
 ```


 // Peek Elements
```cpp
int peakElement(int arr[], int n)
    {
        int start = 0;
        int end = n-1;
        while(start<=end){
          int  mid = (start+end)/2;
          if((mid == 0 || arr[mid]>=arr[mid-1])&&(mid == n-1 || arr[mid]>=arr[mid+1])){
              return mid;
          }
          if(mid>0 &&arr[mid-1]>=arr[mid]){
             end = mid  -1;
          }else{
              start = mid + 1;
          }
        }
        return -1;
    }
```