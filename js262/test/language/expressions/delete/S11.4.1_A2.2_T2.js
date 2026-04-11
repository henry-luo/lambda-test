

/*---
info: If GetBase(x) doesn't have a property GetPropertyName(x), return true
esid: sec-delete-operator-runtime-semantics-evaluation
description: Checking Object object and Function object cases
---*/


function MyFunction() {}
var MyObject = new MyFunction();
if (delete MyObject.prop !== true) {
  throw new Test262Error(
    '#1: function MyFunction(){}; var MyObject = new MyFunction(); delete MyObject.prop === true'
  );
}


var MyObject = new Object();
if (delete MyObject.prop !== true) {
  throw new Test262Error('#2: var MyObject = new Object(); delete MyObject.prop === true');
}
