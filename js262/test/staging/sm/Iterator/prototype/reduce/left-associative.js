

/*---
features:
  - iterator-helpers
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/

assert.sameValue([1, 2, 3].values().reduce((x, y) => `(${x}+${y})`, 0), '(((0+1)+2)+3)');
assert.sameValue([1, 2, 3].values().reduce((x, y) => `(${x}+${y})`), '((1+2)+3)');

