

/*---
esid: sec-delete-operator-runtime-semantics-evaluation
description: >
  delete operations throws TypeError exception when base object is unresolvable reference.
---*/

assert.throws(TypeError, () => {
  delete Object[0][0];
});
