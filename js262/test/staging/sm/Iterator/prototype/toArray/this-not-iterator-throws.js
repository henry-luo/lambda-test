

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

assertThrowsInstanceOf(Iterator.prototype.toArray.bind(undefined), TypeError);
assertThrowsInstanceOf(Iterator.prototype.toArray.bind({}), TypeError);
assertThrowsInstanceOf(Iterator.prototype.toArray.bind({next: 0}), TypeError);

