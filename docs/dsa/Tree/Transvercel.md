# Transvercel

- inorder
  left root right
- pre order
  left root right
- post order
  left right root

code example for inorder

```c++
void inOrder(node){
    if(node == null){
        return ;
    }
    inOrder(node->left);
    print(node->data);
    inOrder(node->right);
}
```
