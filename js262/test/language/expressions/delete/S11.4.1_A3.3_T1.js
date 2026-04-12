

/*---
info: If the property doesn't have the DontDelete attribute, remove the property
esid: sec-delete-operator-runtime-semantics-evaluation
description: Checking declared variable
flags: [noStrict]
---*/


try {
  x = 1;
  delete x;
  x;
  throw new Test262Error('#1: x = 1; delete x; x is not exist');
} catch (e) {
  if (e instanceof ReferenceError !== true) {
    throw new Test262Error('#1: x = 1; delete x; x is not exist');
  }
}
