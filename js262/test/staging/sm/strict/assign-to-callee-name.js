

/*---
flags:
  - noStrict
description: |
  Assigning to a function expression's name within that function should throw a TypeError in strict mode code
info: bugzilla.mozilla.org/show_bug.cgi?id=610350
esid: pending
---*/

var f = function assignSelfStrict() { "use strict"; assignSelfStrict = 12; };
assert.throws(TypeError, f);

var assignSelf = 42;
var f2 = function assignSelf() { assignSelf = 12; };

f2(); 
assert.sameValue(assignSelf, 42);
