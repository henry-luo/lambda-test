

/*---
features:
  - iterator-helpers
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/

const fn = x => x;
assert.throws(TypeError, Iterator.prototype.forEach.bind(undefined, fn));
assert.throws(TypeError, Iterator.prototype.forEach.bind({}, fn));
assert.throws(TypeError, Iterator.prototype.forEach.bind({next: 0}, fn));

