

/*---
esid: sec-undefined
description: undefined is not writable, should throw TypeError in strict mode
flags: [onlyStrict]
---*/

var global = this;

assert.throws(TypeError, function() {
  global["undefined"] = 5; 
});
assert.sameValue(global["undefined"], void 0);
assert.sameValue(undefined, void 0);
