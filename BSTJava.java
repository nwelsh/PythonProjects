// --== CS400 File Header Information ==--
// Name: Nicole Welsh
// Email: Newelsh@wisc.edu
// Team:GB
// TA: Dan Kiel
// Lecturer: Gary Dahl
// Notes to Grader: <optional extra notes>
import java.util.LinkedList;
// import BinarySearchTree.Node;

/**
 * Binary Search Tree implementation with a Node inner class for representing the nodes within a
 * binary search tree. You can use this class' insert method to build a binary search tree, and its
 * toString method to display the level order (breadth first) traversal of values in that tree.
 *
 * @author Nicole Welsh
 * @param <T> generic parameter
 */
public class RedBlackTree<T extends Comparable<T>> {

  /**
   * This class represents a node holding a single value within a binary tree the parent, left, and
   * right child references are always be maintained.
   */
  protected static class Node<T> {
    public T data;
    public Node<T> parent; // null for root node
    public Node<T> leftChild;
    public Node<T> rightChild;

    public boolean isBlack = false; // sets to red

    /**
     * Adds the data to the node
     *
     * @param data
     */
    public Node(T data) {
      this.data = data;
    }

    /**
     * @return true when this node has a parent and is the left child of that parent, otherwise
     *         return false
     */
    public boolean isLeftChild() {
      return this.parent != null && this.parent.leftChild == this;
    }

    /**
     * This method performs a level order traversal of the tree rooted at the current node. The
     * string representations of each data value within this tree are assembled into a comma
     * separated string within brackets (similar to many implementations of java.util.Collection).
     *
     * @return string containing the values of this tree in level order
     */
    @Override
    public String toString() { // display subtree in order traversal
      String output = "[";
      LinkedList<Node<T>> q = new LinkedList<>();
      q.add(this);
      while (!q.isEmpty()) {
        Node<T> next = q.removeFirst();
        if (next.leftChild != null) {
          q.add(next.leftChild);
        }
        if (next.rightChild != null) {
          q.add(next.rightChild);
        }
        output += next.data.toString();
        if (!q.isEmpty()) {
          output += ", ";
        }
      }
      return output + "]";
    }


  }

  /**
   * to resolve red child under red parent red black tree property violations that are introduced by
   * inserting new nodes into a red black tree. While doing so, all other red black tree properties
   * must also be preserved.
   *
   * @param newNode takes a reference to a newly added red node
   */
  private void enforceRBTreePropertiesAfterInsert(Node<T> newNode) {
    // if nothing is null, continue
    if (newNode.parent != null && (!newNode.parent.isBlack && !newNode.isBlack)) {
      Node<T> sibling = null;
      Node<T> grandparent = newNode.parent.parent;
      // makes the sibling Node
      if (newNode.parent.isLeftChild()) {
        sibling = grandparent.rightChild;
      } else {
        sibling = grandparent.leftChild;
      }
      // if the sibling is null or black
      if (sibling == null || sibling.isBlack) {
        // node is a left child and the parent is the right
        if (newNode.isLeftChild() && !newNode.parent.isLeftChild()) {
          // swap these before the swap
          Node<T> swap = newNode.rightChild;
          newNode.rightChild = newNode.parent;
          grandparent = newNode;
          newNode.parent.leftChild = swap;

          // swapped components so they can be rotated
          grandparent.rightChild = newNode;
          newNode.parent = grandparent;

          // rotate grandparent and node
          this.rotate(newNode, newNode.parent.parent);

          // re-color so the node is black and grandparent and parent are red
          newNode.isBlack = true;
          grandparent.isBlack = false;
          newNode.parent.isBlack = false;
          // node is a right child and parent is a left child
        } else if (!newNode.isLeftChild() && newNode.parent.isLeftChild()) {
          // swaps the grandparent, parent, and child
          Node<T> swap = newNode.leftChild;
          newNode.leftChild = newNode.parent;
          grandparent = newNode;
          newNode.parent.rightChild = swap;

          grandparent.leftChild = newNode;
          newNode.parent = newNode.parent.parent;

          // rotate the node and the grandparent after swapping
          this.rotate(newNode, grandparent);

          // re-color so the node is black and grandparent and parent are red
          newNode.isBlack = true;
          grandparent.isBlack = false;
          newNode.parent.isBlack = false;

          // if the sibling is null
        } else {
          this.rotate(newNode.parent, grandparent);

          // re-color
          newNode.parent.isBlack = true; // parent is black
          grandparent.isBlack = false; // grandparent is red
        }
      } else {
        // if the sibling is red, re-color
        newNode.parent.isBlack = true;
        grandparent.isBlack = false;

        // make the sibling also black
        if (sibling != null) {
          sibling.isBlack = true;

        }
        // makes sure the properties are correct
        this.enforceRBTreePropertiesAfterInsert(grandparent);
      }
    }
  }

  protected Node<T> root; // reference to root node of tree, null when empty

  /**
   * Performs a naive insertion into a binary search tree: adding the input data value to a new node
   * in a leaf position within the tree. After this insertion, no attempt is made to restructure or
   * balance the tree. This tree will not hold null references, nor duplicate data values.
   *
   * @param data to be added into this binary search tree
   * @throws NullPointerException     when the provided data argument is null
   * @throws IllegalArgumentException when the tree already contains data
   */
  public void insert(T data) throws NullPointerException, IllegalArgumentException {
    // null references cannot be stored within this tree
    if (data == null) {
      throw new NullPointerException("This RedBlackTree cannot store null references.");
    }

    Node<T> newNode = new Node<>(data);
    if (this.root == null) {
      this.root = newNode;
    } // add first node to an empty tree
    else {
      this.insertHelper(newNode, this.root); // recursively insert into subtree
    }
    // always sets the root node to be red
    this.root.isBlack = true;

  }

  /**
   * Recursive helper method to find the subtree with a null reference in the position that the
   * newNode should be inserted, and then extend this tree by the newNode in that position.
   *
   * @param newNode is the new node that is being added to this tree
   * @param subtree is the reference to a node within this tree which the newNode should be inserted
   *                as a descenedent beneath
   * @throws IllegalArgumentException when the newNode and subtree contain equal data references (as
   *                                  defined by Comparable.compareTo())
   */
  private void insertHelper(Node<T> newNode, Node<T> subtree) {
    int compare = newNode.data.compareTo(subtree.data);
    // do not allow duplicate values to be stored within this tree
    if (compare == 0) {
      throw new IllegalArgumentException("This RedBlackTree already contains that value.");
    } else if (compare < 0) {
      if (subtree.leftChild == null) { // left subtree empty, add here
        subtree.leftChild = newNode;
        newNode.parent = subtree;
        // otherwise continue recursive search for location to insert
      } else {
        this.insertHelper(newNode, subtree.leftChild);
        // makes sure the properties are correct
        this.enforceRBTreePropertiesAfterInsert(newNode);
        this.root.isBlack = true;

      }
    } else {
      if (subtree.rightChild == null) { // right subtree empty, add here
        subtree.rightChild = newNode;
        newNode.parent = subtree;
        // otherwise continue recursive search for location to insert
      } else {
        this.insertHelper(newNode, subtree.rightChild);
        // makes sure the properties are correct
        this.enforceRBTreePropertiesAfterInsert(newNode);
        this.root.isBlack = true;

      }
    }

  }

  /**
   * This method performs a level order traversal of the tree. The string representations of each
   * data value within this tree are assembled into a comma separated string within brackets
   * (similar to many implementations of java.util.Collection, like java.util.ArrayList, LinkedList,
   * etc).
   *
   * @return string containing the values of this tree in level order
   */
  @Override
  public String toString() {
    return this.root.toString();
  }

  /**
   * Performs the rotation operation on the provided nodes within this BST. When the provided child
   * is a leftChild of the provided parent, this method will perform a right rotation. When the
   * provided child is a rightChild of the provided parent, this method will perform a left
   * rotation. When the provided nodes are not related in one of these ways, this method will throw
   * an IllegalArgumentException.
   *
   * @param child  is the node being rotated from child to parent position (between these two node
   *               arguments)
   * @param parent is the node being rotated from parent to child position (between these two node
   *               arguments)
   * @throws IllegalArgumentException when the provided child and parent node references are not
   *                                  initially (pre-rotation) related that way
   */
  private void rotate(Node<T> child, Node<T> parent) throws IllegalArgumentException {
    // if child is left child (smaller) than parent, do right rotation
    if (!child.parent.equals(parent)) {
      throw new IllegalArgumentException("This child is not related to this parent");
    } else {
      Node<T> grandparent = parent.parent;
      boolean parentIsLeft = parent.isLeftChild();
      if (child.isLeftChild()) {
        Node<T> curr = child.rightChild; // holds the right child to assign to parent later
        child.rightChild = parent; // changes the childs right child to be the parent
        parent.parent = child; // parent then points to child
        parent.leftChild = curr; // parents left child is childs old right child
        if (curr != null) {
          curr.parent = parent;
        }
        if (grandparent != null) {
          // makes the grandparent connected to the right node
          if (parentIsLeft) {
            grandparent.leftChild = child;
          } else {
            grandparent.rightChild = child;
          }
          child.parent = grandparent;
        } else {
          // if the child is the root, sets the root to the child and resets the roots parent
          this.root = child;
          this.root.parent = null;
        }
      } else {
        Node<T> curr = child.leftChild; // does the same as right rotate but with left
        child.leftChild = parent;
        parent.parent = child;
        parent.rightChild = curr;
        if (curr != null) {
          curr.parent = parent;
        }
        if (grandparent != null) {
          if (parentIsLeft) {
            grandparent.leftChild = child;
          } else {
            grandparent.rightChild = child;
          }
          child.parent = grandparent;
        } else {
          // if the child is the root, sets the root to the child and resets the roots parent
          this.root = child;
          this.root.parent = null;
        }
      }
    }
  }
  // end of rotate



}

