# Graph Representation
- [Basic Of Graph](https://geuac-my.sharepoint.com/:b:/g/personal/19021621_geu_ac_in/Edv3Uwa4HUFEr0jZCSz6IJ4BSnHGuECcLZXuC5nhnACIJQ?e=a8Q9I6)
- [Graph Representation - Theroy notes](https://geuac-my.sharepoint.com/:b:/g/personal/19021621_geu_ac_in/EUBxdzf1p9BMiw97lw-FtlABHI1z9QwHVV3-zrKqJmtlDQ?e=7sVwnQ)

Adjacency Array 
```cpp
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

# [Bfs notes](https://geuac-my.sharepoint.com/:b:/g/personal/19021621_geu_ac_in/EXUgdc9nUHxGgo9Ot3pjIx8BLqmHQvYQPcFp3XaUR2VOWQ?e=QSmW49)
# BFS basics 

```cpp
#include<bits/stdc++.h>
using namespace std;

void addEdge(vector<int> adj[],int u,int v){
    adj[u].push_back(v);
    adj[v].push_back(u);
}

void bfs(vector<int> adj[],int v,int s){
    cout<<"bfs\n";
    bool visited[v+1];
    for(int i=0;i<v;i++){
        visited[i] = false;
    }
   queue<int> q;
    visited[s] = true;
    q.push(s);
    while(q.empty() == false){
        int u = q.front();
      q.pop();
      cout<<u<<" ";
      for(int x: adj[u]){
        if(visited[x] == false){
            visited[x] = true;
            q.push(x);
        }   
      }
        
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

# BFS FOR Non Connected Graph
```cpp
#include<bits/stdc++.h> 
using namespace std; 

void BFS(vector<int> adj[], int s, bool visited[]) 
{ 	queue<int>  q;
	
	visited[s] = true; 
	q.push(s); 

	while(q.empty()==false) 
	{ 
		int u = q.front(); 
		q.pop();
		cout << u << " "; 
		 
		for(int v:adj[u]){
		    if(visited[v]==false){
		        visited[v]=true;
		        q.push(v);
		    }
		} 
	} 
}

void BFSDin(vector<int> adj[], int V){
    bool visited[V]; 
	for(int i = 0;i<V; i++) 
		visited[i] = false;
		
    for(int i=0;i<V;i++){
        if(visited[i]==false)
            BFS(adj,i,visited);
    }
}

void addEdge(vector<int> adj[], int u, int v){
    adj[u].push_back(v);
    adj[v].push_back(u);
}

int main() 
{ 
	int V=7;
	vector<int> adj[V];
	addEdge(adj,0,1); 
	addEdge(adj,0,2); 
	addEdge(adj,2,3); 
	addEdge(adj,1,3); 
	addEdge(adj,4,5);
	addEdge(adj,5,6);
	addEdge(adj,4,6);

	cout << "Following is Breadth First Traversal: "<< endl; 
	BFSDin(adj,V); 

	return 0; 
} 

```
# Bfs for Connected Components
```cpp
#include<bits/stdc++.h> 
using namespace std; 

void BFS(vector<int> adj[], int s, bool visited[]) 
{ 	queue<int>  q;
	
	visited[s] = true; 
	q.push(s); 

	while(q.empty()==false) 
	{ 
		int u = q.front(); 
		q.pop();
		 
		for(int v:adj[u]){
		    if(visited[v]==false){
		        visited[v]=true;
		        q.push(v);
		    }
		} 
	} 
}

int BFSDin(vector<int> adj[], int V){
    bool visited[V]; int count=0;
	for(int i = 0;i<V; i++) 
		visited[i] = false;
		
    for(int i=0;i<V;i++){
        if(visited[i]==false)
            {BFS(adj,i,visited);count++;}
    }

    return count;
}

void addEdge(vector<int> adj[], int u, int v){
    adj[u].push_back(v);
    adj[v].push_back(u);
}

int main() 
{ 
	int V=7;
	vector<int> adj[V];
	addEdge(adj,0,1); 
	addEdge(adj,0,2); 
	addEdge(adj,2,3); 
	addEdge(adj,1,3); 
	addEdge(adj,4,5);
	addEdge(adj,5,6);
	addEdge(adj,4,6);

	cout << "Number of islands: "<<BFSDin(adj,V); 

	return 0; 
} 

```