

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


const x = 1;
with ({x: 1, [Symbol.unscopables]: {x: true}})
    assertThrowsInstanceOf(() => {x = 2;}, TypeError);

