

/*---
esid: sec-string.prototype.padend
description: String#padEnd should fail if given a Symbol fillString.
author: Jordan Harband
features: [Symbol]
---*/

assert.throws(TypeError, function() {
  'abc'.padEnd(10, Symbol());
});
