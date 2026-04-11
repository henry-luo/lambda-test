

/*---
info: If the property doesn't have the DontDelete attribute, return true
esid: sec-delete-operator-runtime-semantics-evaluation
description: Checking declared variable
---*/


function MyFunction() {}
MyFunction.prop = 1;
if (delete MyFunction.prop !== true) {
  throw new Test262Error(
    '#1: function MyFunction(){}; MyFunction.prop = 1; delete MyFunction.prop === true'
  );
}
