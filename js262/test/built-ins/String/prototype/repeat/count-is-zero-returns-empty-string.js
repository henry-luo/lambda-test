

/*---
es6id: 21.1.3.13
description: >
  If count is zero, returns an empty String.
info: |
  21.1.3.13 String.prototype.repeat ( count )

  8. Let T be a String value that is made from n copies of S appended together.
  If n is 0, T is the empty String.
  9. Return T.
---*/

assert.sameValue('foo'.repeat(0), '');
