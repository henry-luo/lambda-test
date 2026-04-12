

/*---
esid: sec-sharedarraybuffer-length
description: >
  Return abrupt from ToIndex(length)
info: |
  SharedArrayBuffer( length )

  1. If NewTarget is undefined, throw a TypeError exception.
  2. Let byteLength be ? ToIndex(length).
  ...
features: [SharedArrayBuffer]
---*/

var len = {
  valueOf: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  new SharedArrayBuffer(len);
});
