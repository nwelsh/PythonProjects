 # I am learning python, I used https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/ to learn the algorithm through code 
#    50
#  /     \
# 30     70
#  / \ / \
# 20 40 60 80

class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key
 
#insert method: insert and return the value 
def insert(root, key):
  #if there is no root, this one becomes the root 
    if root is None:
        return Node(key)
    else:
        if root.val == key:
            return root
        elif root.val < key:
            root.right = insert(root.right, key)
        else:
            root.left = insert(root.left, key)
    return root

def inorder(root):
    if root:
        inorder(root.left)
        print(root.val)
        inorder(root.right)
 
r = Node(50)
r = insert(r, 30)
r = insert(r, 20)
r = insert(r, 40)
r = insert(r, 70)
r = insert(r, 60)
r = insert(r, 80)
 
# Print inoder traversal of the BST
inorder(r)


def search(root,key):
     
    # Base Cases: root is null or key is present at root
    if root is None or root.val == key:
        return root
 
    # Key is greater than root's key
    if root.val < key:
        return search(root.right,key)
   
    # Key is smaller than root's key
    return search(root.left,key)
