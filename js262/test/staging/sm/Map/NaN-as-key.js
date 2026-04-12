

/*---
description: |
  All NaNs must be treated as identical keys for Map
info: bugzilla.mozilla.org/show_bug.cgi?id=722260
esid: pending
---*/


var key = -/a/g.missingProperty;

var m = new Map();
m.set(key, 17);
assert.sameValue(m.get(key), 17);
assert.sameValue(m.get(-key), 17);
assert.sameValue(m.get(NaN), 17);

m.delete(-key);
assert.sameValue(m.has(key), false);
assert.sameValue(m.has(-key), false);
assert.sameValue(m.has(NaN), false);

m.set(-key, 17);
assert.sameValue(m.get(key), 17);
assert.sameValue(m.get(-key), 17);
assert.sameValue(m.get(NaN), 17);

m.delete(NaN);
assert.sameValue(m.has(key), false);
assert.sameValue(m.has(-key), false);
assert.sameValue(m.has(NaN), false);

m.set(NaN, 17);
assert.sameValue(m.get(key), 17);
assert.sameValue(m.get(-key), 17);
assert.sameValue(m.get(NaN), 17);

m.delete(key);
assert.sameValue(m.has(key), false);
assert.sameValue(m.has(-key), false);
assert.sameValue(m.has(NaN), false);
