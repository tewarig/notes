# Shortes Path in bfs
-[Notes]()
```cpp
#include<bits/stdc++.h>
using namespace std;

void addEdge(vector<int> adj[],int u,int v){
    adj[u].push_back(v);
    adj[v].push_back(u);
}

void bfs(vector<int> adj[],int v,int s){
    
    cout<<"bfs to find distance \n";
    bool visited[v+1];
    for(int i=0;i<v;i++){
        visited[i] = false;
    }
    int distance[v+1] ={0};
    distance[s] = 0;
   queue<int> q;
    visited[s] = true;
    q.push(s);
    while(q.empty() == false){
        int u = q.front();
      q.pop();
    //   cout<<u<<" ";
      for(int x: adj[u]){
        if(visited[x] == false){
            visited[x] = true;
            distance[x] = distance [u] + 1;
            q.push(x);
        }   
      }
        
    }
    for(int i=0;i<v;i++){
      cout<<distance[i]<<" ";   
    }
    
}

int main(){
    int v = 4;
    vector<int> adj[v] ;
    addEdge(adj,0,1);
    addEdge(adj,0,2);
    addEdge(adj,1,2);
    addEdge(adj,1,3);
    bfs(adj,4,0);
    



    
    return 0;
}
```