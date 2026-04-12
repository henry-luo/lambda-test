

/*---
description: Allows symbol keys.
esid: sec-object.fromentries
features: [Symbol, Object.fromEntries]
---*/

var key = Symbol();
var result = Object.fromEntries([[key, 'value']]);
assert.sameValue(result[key], 'value');
