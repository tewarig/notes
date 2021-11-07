# Graph Representation
- (Basic Of Graph)[https://geuac-my.sharepoint.com/:b:/g/personal/19021621_geu_ac_in/Edv3Uwa4HUFEr0jZCSz6IJ4BSnHGuECcLZXuC5nhnACIJQ?e=a8Q9I6]
- (Graph Representation - Theroy)[https://geuac-my.sharepoint.com/:b:/g/personal/19021621_geu_ac_in/EUBxdzf1p9BMiw97lw-FtlABHI1z9QwHVV3-zrKqJmtlDQ?e=7sVwnQ]

Adjacency Array 
```c++
#include<bits/stdc++.h>
using namespace std;

void addEdge(vector<int> adj[],int u,int v){
    adj[u].push_back(v);
    adj[v].push_back(u);
}
void printGraph(vector<int> adj[],int v){
    for(int i=0;i<v;i++){
        for(int x:adj[i]){
            cout<<x<<" ";
        }
        cout<<"\n";
    }
}

int main(){
    int v = 4;
    vector<int> adj[v] ;
    addEdge(adj,0,1);
    addEdge(adj,0,2);
    addEdge(adj,1,2);
    addEdge(adj,1,3);
    printGraph(adj,v);
    



    
    return 0;
}
/* 
1 2 
0 2 3 
0 1 
1 

*/
```