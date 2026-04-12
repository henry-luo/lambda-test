

/*---
features:
  - iterator-helpers
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/

assert.throws(TypeError, Iterator.prototype.toArray.bind(undefined));
assert.throws(TypeError, Iterator.prototype.toArray.bind({}));
assert.throws(TypeError, Iterator.prototype.toArray.bind({next: 0}));

