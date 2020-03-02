You are going to write some programs to resolve below computational problems. 

The purpose of this test is to evaluate your basic programming skills, how can you resolve computational problems in your own approach and how do you design and implement a program.  

  

You can use any programming language you know best or even some pseudo code if needed. Just try to make the best algorithm as possible. 

  

List, Map and Set data structures are allowed to used. 

But collection utils, search and sort utils are NOT allowed. 

  

### Exercise 1 (1 points). 

  

Write a program to calculate the sum of first n terms of a geometric progression with scale factor **a** and common ratio **r**. 

 

  

Example of input and output: 

Input: n = 4, a = 2, r = 3. 

Output will be sum of 2 + 6 + 18 + 54 = 80 

  

### Exercise 2  (3 points)  

Implement a program for an ATM machine to calculate number of each kind of money notes need to output for a withdraw-requested amount as below requirement. 

Input: 

* Available money notes 

* Withdraw-requested amount 

* If request amount is not common multiple of smallest value money note, throw an exception with error message 

Output: 

* Number of each kind of money notes need to output that satisfy the rule: 

* Output maximum number of higher value money notes as much as possible first before using lower value money notes 

  

Example 1: 

Input: 

* Available money notes: 100.000, 200.000 

* Withdraw-requested amount: 3.000.000 

Output: 

* 15 money notes of 200K 

  

Example 2: 

Input: 

* Available money notes: 50.000, 100.000, 200.000, 500.000 

* Withdraw-requested amount: 3.350.000 

Output: 

* 6 money notes of 500K 

* 1 money notes of 200K 

* 1 money notes of 100K 

* 1 money notes of 50K 

  

### Exercise 3 (2 points) - You can choose one exercise between 3A or 3B to implement 

#### Exercise 3A 

Implement method to calculate the sum of numbers from N to M in Fibonacci sequence, try to optimize code for best performance if you can. 

  

Definition of Fibonacci sequence: 

   Fn = Fn-1 + Fn-2 with seed values F0 = 0, F1 = 1 

  

Example of first 10 numbers of Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21,  34, ... 

  

An example input/output of the method: 

Input: N = 3, M = 5 

Output: 2 + 3 + 5 = 12 

  

#### Exercise 3B 

Implement method to reverse a given string by using recursive algorithm. 

  

An example of input/output 
```
Input: "abcdefgh" 

Output: "hgfedcba" 
```
  

Exercise 4 (3 points). 

  

Implement method that will list out words that have a maximum number of occurrence in a paragraph. You can use loop statement only once 

  

Assumption: Delimiter between two next words is a space. 

  

An example of input/output 
```
Input: “I want to know how to achieve the things I want” 

Output: [to, I, want] 
```
 
 

  

### Exercise 5 (4 points). 

  

Given below implementation of a BinaryTree data structure.  

Please write your implementation for the method getMaxDepth to calculate the highest depth of the binary tree.  

  
```
package com.upskills.tvo; 

/** 

 * @author http://cslibrary.stanford.edu/110/BinaryTrees.html#java

 */ 

public class BinaryTree { 

    // Root node pointer. Will be null for an empty tree. 

    private Node root; 

  

    /* 

     * --Node-- The binary tree is built using this nested node class. Each node 

     * stores one data element, and has left and right sub-tree pointer which 

     * may be null. The node is a "dumb" nested class -- we just use it for 

     * storage; it does not have any methods. 

     */ 

    private static class Node { 

        Node left; 

        Node right; 

        int data; 

  

        Node(int newData) { 

            left = null; 

            right = null; 

            data = newData; 

        } 

    } 

  

    /** 

     * Creates an empty binary tree -- a null root pointer. 

     */ 

    public BinaryTree() { 

        root = null; 

    } 

  

    /** 

     * TODO: Please implement this method. 

     * @return The maximum depth of this tree. 

     */ 

    public int getMaxDepth() { 

        // Please write your implementation here 

        return 0; 

    } 

  

    /** 

     * Inserts the given data into the binary tree. Uses a recursive helper. 

     */ 

    public void insert(int data) { 

        root = insert(root, data); 

    } 

  

    /** 

     * Recursive insert -- given a node pointer, recur down and insert the given 

     * data into the tree. Returns the new node pointer (the standard way to 

     * communicate a changed pointer back to the caller). 

     */ 

    private Node insert(Node node, int data) { 

        if (node == null) { 

            node = new Node(data); 

        } else { 

            if (data <= node.data) { 

                node.left = insert(node.left, data); 

            } else { 

                node.right = insert(node.right, data); 

            } 

        } 

  

        return (node); 

    } 

} 
```