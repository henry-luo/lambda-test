

/*---
description: Succeeds when an entry object is a boxed string.
esid: sec-object.fromentries
features: [Object.fromEntries]
---*/

var result = Object.fromEntries([new String('ab')]);
assert.sameValue(result['a'], 'b');
