

/*---
info: If GetBase(x) doesn't have a property GetPropertyName(x), return true
esid: sec-delete-operator-runtime-semantics-evaluation
description: Checking undeclared variable case
---*/


if (delete this.x !== true) {
  throw new Test262Error('#1: delete this.x === true');
}
