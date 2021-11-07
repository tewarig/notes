# DFS

[DFS theory notes](https://geuac-my.sharepoint.com/:b:/g/personal/19021621_geu_ac_in/EaI8VYG9HFpOvNZB_yhgs38BXZ-Suj9gOTmCnPkOiNCxlg?e=Nxv01E)

```cpp
#include<bits/stdc++.h>
using namespace std;




void dfsrec(vector<int> adj[],int s,bool isVisited[]){
    isVisited[s]= true;
    cout<<s<<" ";
   

    for(int u:adj[s]){
        if(isVisited[u]==false){
            dfsrec(adj,u,isVisited);
        }
    }
    
}
void dfs(vector<int> adj[],int v,int s){

    bool isVisited[v];
    for(int i=0;i<v;i++){
        isVisited[i] = false;
    }
    dfsrec(adj,s,isVisited);

    
}
void addEdge(vector<int> adj[], int u, int v){
    adj[u].push_back(v);
    adj[v].push_back(u);
}
int main(){
   int V=5;
	vector<int> adj[V];
	addEdge(adj,0,1); 
	addEdge(adj,0,2); 
	addEdge(adj,2,3); 
	addEdge(adj,1,3); 
	addEdge(adj,1,4);
	addEdge(adj,3,4);

	cout << "Following is Depth First Traversal: "<< endl; 
	dfs(adj,5,0);
    



    
    return 0;
}

//0 1 3 2 4 
```
- for disconnected Graphs
```c++
#include<bits/stdc++.h>
using namespace std;




void dfsrec(vector<int> adj[],int s,bool isVisited[]){
    isVisited[s]= true;
    cout<<s<<" ";
   

    for(int u:adj[s]){
        if(isVisited[u]==false){
            dfsrec(adj,u,isVisited);
        }
    }
    
}
void dfs(vector<int> adj[],int v){

    bool isVisited[v];
    for(int i=0;i<v;i++){
        isVisited[i] = false;
    }
    // we simply need to call loop for non connected components in graph
    for(int i=0;i<v;i++){
        if(isVisited[i]==false){
         dfsrec(adj,i,isVisited);

        }
    }

    
}
void addEdge(vector<int> adj[], int u, int v){
    adj[u].push_back(v);
    adj[v].push_back(u);
}
int main(){
   int V=5;
	vector<int> adj[V];
	addEdge(adj,0,1); 
	addEdge(adj,0,2); 
	addEdge(adj,1,2);
	addEdge(adj,3,4);

	cout << "Following is Depth First Traversal: "<< endl; 
	dfs(adj,5);
    



    
    return 0;
}
```
- for finding the connected componets just add the count flag in it.
```c++
#include<bits/stdc++.h> 
using namespace std; 

void DFSRec(vector<int> adj[], int s, bool visited[]) 
{ 	
    visited[s]=true;
    
    for(int u:adj[s]){
        if(visited[u]==false)
            DFSRec(adj,u,visited);
    }
}

int DFS(vector<int> adj[], int V){
    int count=0;
    bool visited[V]; 
	for(int i = 0;i<V; i++) 
		visited[i] = false;
		
    for(int i=0;i<V;i++){
        if(visited[i]==false)
            {DFSRec(adj,i,visited);count++;}
    }
    return count;
}

void addEdge(vector<int> adj[], int u, int v){
    adj[u].push_back(v);
    adj[v].push_back(u);
}

int main() 
{ 
	int V=5;
	vector<int> adj[V];
	addEdge(adj,0,1); 
	addEdge(adj,0,2); 
	addEdge(adj,1,2);
	addEdge(adj,3,4);

	cout << "Number of connected components: "<< DFS(adj,V); 

	return 0; 
} 

```