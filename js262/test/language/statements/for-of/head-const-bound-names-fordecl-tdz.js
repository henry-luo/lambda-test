

/*---
es6id: 13.6.4.12_S2
description: >
    ForIn/Of: Bound names of ForDeclaration are in TDZ (for-of)
---*/

assert.throws(ReferenceError, function() {
  let x = 1;
  for (const x of [x]) {}
});
