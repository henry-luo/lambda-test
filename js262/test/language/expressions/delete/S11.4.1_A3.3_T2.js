

/*---
info: If the property doesn't have the DontDelete attribute, remove the property
esid: sec-delete-operator-runtime-semantics-evaluation
description: Checking declared variable
---*/


function MyFunction() {}
MyFunction.prop = 1;
delete MyFunction.prop;
if (MyFunction.prop !== undefined) {
  throw new Test262Error(
    '#1: function MyFunction(){}; MyFunction.prop = 1; delete MyFunction.prop; MyFunction.prop === undefined. Actual: ' +
    MyFunction.prop
  );
}
