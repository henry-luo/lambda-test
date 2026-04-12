

/*---
esid: sec-undefined
description: undefined is not writable, should not throw in non-strict mode
flags: [noStrict]
---*/

undefined = 5;
assert.sameValue(typeof undefined, "undefined", 'typeof undefined');

var nosuchproperty;
assert.sameValue(nosuchproperty, undefined, 'nosuchproperty');
