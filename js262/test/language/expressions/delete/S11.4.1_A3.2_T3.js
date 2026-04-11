

/*---
info: If the property doesn't have the DontDelete attribute, return true
esid: sec-delete-operator-runtime-semantics-evaluation
description: Checking declared variable
---*/


function MyFunction() {}
var MyObject = new MyFunction();
MyObject.prop = 1;
if (delete MyObject.prop !== true) {
  throw new Test262Error(
    '#1: function MyFunction(){}; var MyObject = new MyFunction(); MyFunction.prop = 1; delete MyObject.prop === true'
  );
}
