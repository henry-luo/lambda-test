

/*---
esid: sec-string.prototype.padstart
description: String#padStart should fail if given a Symbol fillString.
author: Jordan Harband
features: [Symbol]
---*/

assert.throws(TypeError, function() {
  'abc'.padStart(10, Symbol());
});
