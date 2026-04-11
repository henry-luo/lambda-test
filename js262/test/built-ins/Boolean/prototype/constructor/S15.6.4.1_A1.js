

/*---
info: |
    The initial value of Boolean.prototype.constructor is the
    built-in Boolean constructor
esid: sec-boolean-constructor
description: Compare Boolean.prototype.constructor with Boolean
---*/
assert.sameValue(
  Boolean.prototype.constructor,
  Boolean,
  'The value of Boolean.prototype.constructor is expected to equal the value of Boolean'
);
