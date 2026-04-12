

/*---
info: |
    Object Modification Resulting in a New Object for Not a Self-Modified
    Object leads to loss of integrity
es5id: 8.7_A4
description: >
    Create a reference to the string, and Concatenate some new text
    onto the string object
---*/


var item = new String("test");

var itemRef = item;


item += "ing";


if( item == itemRef ){
  throw new Test262Error('#1: var item = new String("test"); var itemRef = item; item += "ing"; item != itemRef');
};

