

/*---
esid: sec-array.prototype.fill
description: >
  Return abrupt from ToInteger(end).
info: |
  22.1.3.6 Array.prototype.fill (value [ , start [ , end ] ] )

  ...
  8. If end is undefined, let relativeEnd be len; else let relativeEnd be
  ToInteger(end).
  9. ReturnIfAbrupt(relativeEnd).
  ...
---*/

var end = {
  valueOf: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  [].fill(1, 0, end);
});
