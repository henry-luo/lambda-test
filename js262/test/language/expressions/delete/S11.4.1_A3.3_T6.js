

/*---
info: If the property doesn't have the DontDelete attribute, remove the property
esid: sec-delete-operator-runtime-semantics-evaluation
description: Checking declared variable
flags: [noStrict]
---*/


function MyFunction() {}
var MyObjectVar = new MyFunction();
if (delete MyObjectNotVar !== true) {
  throw new Test262Error(
    '#1: function MyFunction(){}; var MyObjectNotVar = new MyFunction(); delete MyObjectNotVar === true'
  );
}
