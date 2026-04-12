

/*---
info: Result of boolean conversion from null value is false
esid: sec-toboolean
description: null convert to Boolean by explicit transformation
---*/
assert.sameValue(Boolean(null), false, 'Boolean(null) must return false');
