# Merge Sort
- Divide and concer Algo
- Stable Sorting Algorithm
- Used for external sorting
- It maintains the original ordero of eqaul time
- It take O(n) extra space


# Merge Two Array in Sorted Order 
write a program to find to merge two sorted arrays
```cpp
#include<iostream>
using namespace std;

int main(){
    
    int arrSize ;
    cin>>arrSize;
    int arr[arrSize];
    for(int i=0;i<arrSize;i++){
        cin>>arr[i];
    }
    int arrSize2 ;
    cin>>arrSize2;
    int arr2[arrSize2];
    for(int j=0;j<arrSize2;j++){
        cin>>arr2[j];
    }
     for(int j=0;j<arrSize2;j++){
        cout<<arr2[j]<<" ";
    }
     for(int j=0;j<arrSize2;j++){
        cout<<arr[j]<<" ";
    }
    cout<<"\n";

    int pointer1 = 0;
    int pointer2 = 0;
    while(pointer1<arrSize && pointer2<arrSize2){
        if(arr[pointer1]<arr2[pointer2]){
            cout<<arr[pointer1]<<" ";
            pointer1++;
        }else if(arr[pointer1]>arr2[pointer2]){
            cout<<arr2[pointer2]<<" ";
            pointer2++;
        }else{
        cout<<arr2[pointer2]<<" "<<arr[pointer1]<<"\n";
        pointer1++;
        pointer2++;
    }
    }
    while(pointer1<arrSize){
        cout<<arr[pointer1]<<" ";
        pointer1++;
    }
    while(pointer2<arrSize2){
        cout<<arr2[pointer2]<<" ";
        pointer2++;
    }
    return 0;
}
```
# finding inversion in an array
it is a inversion when i < j and arr[i] > arr[j]
- When you have array sorted in a increasing order the number of inversion is zero
- When you have array sorted in a decreasing order the number of inversion is maximum 


# Hoare Partation
```cpp
#include<iostream>
using namespace std;


void partation(int arr[],int start,int end){
 int pivot = arr[end-1];
 int smallElementPointer = start - 1;
 for(int index=start ; index< end ;index++){
     if(arr[index]<pivot){
         smallElementPointer++;
        //  cout<<smallElementPointer<<" ";
         swap(arr[index],arr[smallElementPointer]);
            // cout<<arr[index]<<" ";

     }
 }
      swap(arr[pivot],arr[smallElementPointer+1]);

}

int main(){
    
    int arrSize ;
    cin>>arrSize;
    int arr[arrSize];
    for(int i=0;i<arrSize;i++){
        cin>>arr[i];
    }
    partation(arr,0,arrSize);
    for(int i=0;i<arrSize;i++){
        cout<<arr[i]<<" ";
    }
}
```

# Hoare 's Partation
```cpp
#include<iostream>
using namespace std;


int partation(int arr[],int start,int end){
  int pivot = arr[end - 1];
  int lastOccurance = start- 1;
  for(int index = start; index<end ;index++){
      if(arr[index]<pivot){
          lastOccurance++;
        //   cout<<arr[index]<<" ";
          swap(arr[lastOccurance],arr[index]);
      }
  }
  swap(arr[lastOccurance+1],arr[end - 1]);
   
}
int main(){
    
    int arrSize ;
    cin>>arrSize;
    int arr[arrSize];
    for(int i=0;i<arrSize;i++){
        cin>>arr[i];
    }
    partation(arr,0,arrSize);
    for(int i=0;i<arrSize;i++){
        cout<<arr[i]<<" ";
    }
}
```


# Quick Sort 
```cpp
#include<iostream>
using namespace std;

        

int partation(int arr[],int start,int end){
  int pivot = arr[end - 1];
  int lastOccurance = start- 1;
  for(int index = start; index<end ;index++){
      if(arr[index]<pivot){
          lastOccurance++;
        //   cout<<arr[index]<<" ";
          swap(arr[lastOccurance],arr[index]);
      }
  }
  swap(arr[lastOccurance+1],arr[end - 1]);
  return lastOccurance+1;

}

void quickSort(int arr[],int start,int end){
    if(start<end){
        int p  = partation(arr,start,end);
        quickSort(arr,start,p);
        quickSort(arr,p+1,end);
    }
    
}

int main(){
    
    int arrSize ;
    cin>>arrSize;
    int arr[arrSize];
    for(int i=0;i<arrSize;i++){
        cin>>arr[i];
    }
    // partation(arr,0,arrSize);
    quickSort(arr,0,arrSize);
    for(int i=0;i<arrSize;i++){
        cout<<arr[i]<<" ";
    }
}
```