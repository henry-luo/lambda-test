

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
features:
  - iterator-helpers
description: |
  pending
esid: pending
---*/


let iterator;
function mapper(x) {
  let n = iterator.next();
  return x;
}
iterator = [0].values().map(mapper);

assertThrowsInstanceOf(iterator.next, TypeError);

