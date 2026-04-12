

/*---
description: |
  Array prototype and expression closures
info: bugzilla.mozilla.org/show_bug.cgi?id=469625
esid: pending
---*/

Array.prototype.__proto__ = function () { return 3; };

assert.throws(TypeError, function() {
  [].__proto__();
});
