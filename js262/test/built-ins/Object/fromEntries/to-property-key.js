

/*---
description: Coerces keys to strings using ToPropertyKey.
esid: sec-object.fromentries
features: [Symbol.toPrimitive, Object.fromEntries]
---*/

var key = {
  [Symbol.toPrimitive]: function(hint) {
    assert.sameValue(hint, 'string');
    return 'key';
  },
};
var result = Object.fromEntries([[key, 'value']]);
assert.sameValue(result.key, 'value');
