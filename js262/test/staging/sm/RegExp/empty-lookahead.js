

/*---
description: |
  pending
esid: pending
---*/

var regexp;

regexp = /(?=)/;
assert.sameValue(regexp.test('test'), true);

