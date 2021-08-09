# Graph

Graph is a interlinked list of nodes ,here each nodes can have one or many connections.

# Nodes/ Vertices

The data in a graph is called a node or vertices .

# Edges

the connection between the nodes are called edges.

# Example

a social network where people are node and edges is the connection between them , if two people are friend with each other they would have edges :)

# 2 kinds of graphs

- # Directed Graph
  the do have a direction in the edges between the nodes
  example of a directed graph could be a internet and the web page links.
  the nodes are web pages and the links to the other webpages are the Edges.
- # UnDirected Graph
  the don't have any direction in the edges between the nodes
  example could be a social network where people are connected and can send messages to each another. and anyone can send and receive messages.

# How to represent a graph

- # Adjacency List
  here each node is represented as a collection of it's neigbouring collection and the edges.
  a---b----c
  Node A: Node B
  Node B: Node A, Node B
  Node C: Node B

```js
let unDirectedGraph = {
  NodeA: ["NodeB"],
  NodeB: ["NodeA", "NodeC"],
  NodeC: ["NodeB"],
};
//can also be represented as array where nodes have number rather then having a name .
let UDgraph = {
    [1], //node A
    [0,1],//node B
    [1], // node C
}
```

- # Adjancecy Matrix
  a----b----c
  maybe we can put it in a adjancecy martrix
  . | a|b |c
  a | 0|1 |0
  b | 1|0 |1
  c | 0|1 |0
  here zero means their are no edges or relationships
  while one means their are edges or relationships
  - this can be use to represent a directed graph
  - the matrix is always a sqaure matrix since the number of rows would be eqaul to the coulmns

```js
let adjMat = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];
```

- # Incidence Matrix
  it uses rows to represent nodes, and columns to represent the edges.
  we can have uneven number of rows and coumn here.
