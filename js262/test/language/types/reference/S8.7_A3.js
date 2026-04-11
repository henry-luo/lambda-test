

/*---
info: Changing the Reference of an Object While Maintaining Integrity
es5id: 8.7_A3
description: >
    Create a reference to the array, and redefine original array with
    new array
---*/


var items = new Array( "one", "two", "three" );


var itemsRef = items;


items = new Array( "new", "array" );


if( items == itemsRef ){
  throw new Test262Error('#1: var items = new Array( "one", "two", "three" ); var itemsRef = items; items = new Array( "new", "array" ); items != itemsRef');
};

