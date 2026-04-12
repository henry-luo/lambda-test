

/*---
info: If GetBase(x) doesn't have a property GetPropertyName(x), return true
esid: sec-delete-operator-runtime-semantics-evaluation
description: Checking undeclared variable case
flags: [noStrict]
---*/


if (delete x !== true) {
  throw new Test262Error('#1: delete x === true');
}
