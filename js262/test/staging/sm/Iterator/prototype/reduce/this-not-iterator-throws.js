

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

const sum = (x, y) => x + y;
assertThrowsInstanceOf(Iterator.prototype.reduce.bind(undefined, sum), TypeError);
assertThrowsInstanceOf(Iterator.prototype.reduce.bind({}, sum), TypeError);
assertThrowsInstanceOf(Iterator.prototype.reduce.bind({next: 0}, sum), TypeError);

