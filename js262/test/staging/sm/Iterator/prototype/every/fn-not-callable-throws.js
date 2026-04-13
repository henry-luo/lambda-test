

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
features:
  - iterator-helpers
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/

const iter = [].values();

assertThrowsInstanceOf(() => iter.every(), TypeError);
assertThrowsInstanceOf(() => iter.every(undefined), TypeError);
assertThrowsInstanceOf(() => iter.every(null), TypeError);
assertThrowsInstanceOf(() => iter.every(0), TypeError);
assertThrowsInstanceOf(() => iter.every(false), TypeError);
assertThrowsInstanceOf(() => iter.every(''), TypeError);
assertThrowsInstanceOf(() => iter.every(Symbol('')), TypeError);
assertThrowsInstanceOf(() => iter.every({}), TypeError);

