

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

assertThrowsInstanceOf(() => iter.find(), TypeError);
assertThrowsInstanceOf(() => iter.find(undefined), TypeError);
assertThrowsInstanceOf(() => iter.find(null), TypeError);
assertThrowsInstanceOf(() => iter.find(0), TypeError);
assertThrowsInstanceOf(() => iter.find(false), TypeError);
assertThrowsInstanceOf(() => iter.find(''), TypeError);
assertThrowsInstanceOf(() => iter.find(Symbol('')), TypeError);
assertThrowsInstanceOf(() => iter.find({}), TypeError);

