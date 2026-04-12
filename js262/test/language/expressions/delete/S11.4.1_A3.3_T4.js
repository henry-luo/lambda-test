

/*---
info: If the property doesn't have the DontDelete attribute, remove the property
esid: sec-delete-operator-runtime-semantics-evaluation
description: Checking declared variable
flags: [noStrict]
---*/


function MyFunction() {}
var MyObjectVar = new MyFunction();
if (delete MyObjectVar !== false) {
  throw new Test262Error(
    '#1: function MyFunction(){}; var MyObjectVar = new MyFunction(); delete MyObjectVar === false'
  );
}
