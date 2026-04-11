

/*---
esid: sec-for-in-and-for-of-statements
description: >
    ForIn/Of: Bound names of ForDeclaration are in TDZ (for-of)
features: [explicit-resource-management]
---*/

assert.throws(ReferenceError, function() {
  let x = { [Symbol.dispose]() { } };
  for (using x of [x]) {}
});
