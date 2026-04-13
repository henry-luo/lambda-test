

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


with ({x: 1, [Symbol.unscopables]: {x: true}})
    assertThrowsInstanceOf(() => x, ReferenceError);

let x;

