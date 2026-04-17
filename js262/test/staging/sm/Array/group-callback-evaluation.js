

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var array = [1, 2, 3];

var calls = 0;

var grouped = Object.groupBy(array, () => {
  calls++;

  return {
    toString() {
      return "a";
    }
  }
});

assert.sameValue(calls, 3);

