# Activity Selection
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
        int count = 0;
        int lastTime = -1;
        for(int i=0;i<arrSize;i++){
            if(lastTime<v[i].second){
                count++;
                lastTime = v[i].first;
            }
          
        }
        
        cout<<count<<"\n";
        
    }
    return 0;
}
```

