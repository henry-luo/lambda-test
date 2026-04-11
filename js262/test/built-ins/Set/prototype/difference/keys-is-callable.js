

/*---
esid: sec-getsetrecord
description: GetSetRecord throws an exception if the Set-like object's 'keys' property is not callable
info: |
    9. Let keys be ? Get(obj, "keys").
    10. If IsCallable(keys) is false, throw a TypeError exception.
features: [set-methods]
---*/

const s1 = new Set([1, 2]);
const s2 = {
  size: 2,
  has: () => {},
  keys: undefined,
};
assert.throws(
  TypeError,
  function () {
    s1.difference(s2);
  },
  "GetSetRecord throws an error when keys is undefined"
);

s2.keys = {};
assert.throws(
  TypeError,
  function () {
    s1.difference(s2);
  },
  "GetSetRecord throws an error when keys is not callable"
);
