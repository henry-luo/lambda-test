

/*---
esid: sec-string.prototype.padstart
description: String#padStart should fail if given a Symbol receiver.
author: Jordan Harband
features: [Symbol]
---*/

assert.throws(TypeError, function() {
  String.prototype.padStart.call(Symbol());
});
