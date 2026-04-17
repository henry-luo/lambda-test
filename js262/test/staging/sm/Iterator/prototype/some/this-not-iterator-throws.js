

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

const fn = x => x;
assertThrowsInstanceOf(Iterator.prototype.some.bind(undefined, fn), TypeError);
assertThrowsInstanceOf(Iterator.prototype.some.bind({}, fn), TypeError);
assertThrowsInstanceOf(Iterator.prototype.some.bind({next: 0}, fn), TypeError);

