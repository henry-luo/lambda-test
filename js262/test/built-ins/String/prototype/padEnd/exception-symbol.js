

/*---
esid: sec-string.prototype.padend
description: String#padEnd should fail if given a Symbol receiver.
author: Jordan Harband
features: [Symbol]
---*/

assert.throws(TypeError, function() {
  String.prototype.padEnd.call(Symbol());
});
