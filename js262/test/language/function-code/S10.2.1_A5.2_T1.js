

/*---
info: |
    If there is already a property of the variable object with the
    name of a declared variable, the value of the property and its attributes
    are not changed
es5id: 10.2.1_A5.2_T1
description: >
    Checking existence of the variable object property with formal
    parameter
---*/


function f1(x){
  var x;
  
  return typeof x;
}

assert.sameValue(f1(1), "number");


function f2(x){
  var x;
  
  return x;
}

assert.sameValue(f2(1), 1);
