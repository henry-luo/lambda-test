

/*---
info: Result of boolean conversion from boolean value is no conversion
esid: sec-toboolean
description: true and false convert to Boolean by explicit transformation
---*/
assert.sameValue(Boolean(true), true, 'Boolean(true) must return true');
assert.sameValue(Boolean(false), false, 'Boolean(false) must return false');
