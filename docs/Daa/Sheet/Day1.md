# Day One
Just do Linear Search



Given an array of nonnegative integers, design a linear algorithm and implement it using a
program to find whether given key element is present in the array or not. Also, find total number
of comparisons for each input case. (Time Complexity = O(n), where n is the size of input) 

```cpp
#include<iostream>
using namespace std;

int main(){
    int times ;
    cin>>times;
    while(times--){
    int number;
    cin>>number;
    int arr[number];
    for(int i=0;i<number;i++){
        cin>>arr[i];
    }
    int numberToFind = 0;
    cin>>numberToFind;
    bool isFound = false;
    for(int i=0;i<number;i++){
        if(arr[i]==numberToFind){
            cout<<"Present"<<" ";
            cout<<i<<" ";
            isFound = true;
        }
    }
    if(!isFound){
    cout<<"Not Present ";
    cout<<number<<"\n";
    }
    
    }
    
    return 0;
}
```

Given an already sorted array of positive integers, design an algorithm and implement it using a
program to find whether given key element is present in the array or not. Also, find total number
of comparisons for each input case. (Time Complexity = O(nlogn), where n is the size of input).
```cpp
#include<iostream>
using namespace std;

int main(){
    int times ;
    cin>>times;
    while(times--){
    int number;
    cin>>number;
    int arr[number];
    for(int i=0;i<number;i++){
        cin>>arr[i];
    }
    int numberToFind = 0;
    cin>>numberToFind;
    bool isFound = false;
    int left = 0;
    int right = number - 1;
    int count = 0;
    while(arr[left] <= arr[right]){
        int mid = (left + right)/2;
        count++;
        
        if(arr[mid]== numberToFind){
         cout<<"Present:"<<count;    
         isFound = true;
         break;
        }else{
            if(arr[mid]>numberToFind){
                right = mid - 1;
            }else{
                left = mid + 1; 
            }
        }
    }
    if(!isFound){
    cout<<"Not Present ";
    cout<<count<<"\n";
    }
    
    }
    
    return 0;
}
```