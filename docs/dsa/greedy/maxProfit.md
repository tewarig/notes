# Max Profit
```cpp
#include<bits/stdc++.h> 
using namespace std;

int main(){
    int times;
    cin>>times;
    while(times--){
        int arrSize;
        cin>>arrSize;
        vector<pair<int,int>> v;
        for(int i=0;i<arrSize;i++){
            int startTime;
            int endTime;
            cin>>startTime;
            cin>>endTime;
            v.push_back({endTime,startTime});
        }
        sort(v.begin(),v.end());
        reverse(v.begin(),v.end());
    //   for(int j=0;j<arrSize;j++){
    //       cout<<v[j].first<<" "<<v[j].second<<"\n";
    //   }
       //max end time 
       int maxEndTime = 0;
       for(int i=0;i<arrSize;i++){
           if(v[i].second > maxEndTime){
               maxEndTime = v[i].second;
           }
       }
       
       int jobTime[maxEndTime] ;
       for(int i=0;i<arrSize;i++){
           jobTime[i] = -1;
       }
       int count = 0;
       int maxProfit = 0;
       for(int i=0;i<arrSize;i++){
           //to check the deadline of the job
           int j = v[i].second;
           // to check where we can fill the job in the array.
           while(j>=0 && jobTime[j] != -1){
               j--;
           }
           if(j>=0 && jobTime[j]==-1){
               jobTime[j] = i;
               count++;
               maxProfit +=  v[i].first;
               cout<<v[i].first<<"\n";
               
           }
           
       }
       cout<<count<<"Max Profitc "<<maxProfit<<"\n";
    //   cout<<"Max End Time:"<<maxEndTime<<"\n";
    }
    return 0;
}
```