# Sheet 2

# program 1
- Algo used
 modified binary search
 ```cpp
 
#include <iostream>
using namespace std;

int firstOcuurance (int arr[],int size,int key){
  int start = 0;
  int end = size - 1;
  int firstOcuurance = -1;
  while(start <= end){
      int mid = (start + end)/2;
      if(arr[mid] == key){
          firstOcuurance = mid;
          //first occurace update the end
          end = mid - 1;
      }else if(arr[mid] > key){
          end = mid - 1;
      }else{
          start = mid + 1;
      }
      
    }
  return firstOcuurance;
}
int lastOcuurace(int arr[],int size,int key){
    int start = 0;
    int end = size - 1;
    int lastOcuurace = -1;
    while(start<=end){
        int mid = (start + end)/2;
        if(arr[mid] == key){
            lastOcuurace = mid;
            //in last occurace update the last;
            start = mid + 1;
        }else if(arr[mid] > key){
            end = mid -1;
        }else{
            start = mid + 1;
        }
        
    }
    return lastOcuurace;
}


int main()
{
    int n ;
    cin>>n;
    while(n--){
        int arrSize ;
        cin>>arrSize;
        int arr[arrSize];
        for(int index = 0;index<arrSize;index++){
            cin>>arr[index];
        }
        int keyElement;
        cin>>keyElement;
    
    
       cout<< lastOcuurace(arr,arrSize,keyElement) - firstOcuurance(arr,arrSize,keyElement) + 1<<"\n";


        
        
        
    }
    return 0;
}

 ```