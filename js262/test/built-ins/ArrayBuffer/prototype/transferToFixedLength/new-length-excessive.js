

/*---
esid: sec-arraybuffer.prototype.transfertofixedlength
description: >
  Throws a RangeError if the newLength is larger than 2^53 - 1 due to clamping
  in ToIndex.
features: [arraybuffer-transfer]
---*/

var ab = new ArrayBuffer(0);

assert.throws(RangeError, function() {
  
  ab.transferToFixedLength(9007199254740992);
});
