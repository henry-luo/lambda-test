

/*---
esid: sec-weakmap.prototype.getorinsertcomputed
description: |
  Throws TypeError if key cannot be held weakly.
info: |
  WeakMap.prototype.getOrInsertComputed ( key, callbackfn )

  ...
  4. If CanBeHeldWeakly(_key_) is *false*, throw a *TypeError* exception.
  ...
includes: [compareArray.js]
features: [Symbol, WeakMap, upsert]
---*/

var log = [];
var invalidKeys = [1, false, undefined, 'string', null];

var s = new WeakMap();

for (let invalidKey of invalidKeys) {
  assert.throws(TypeError, function () {
    s.getOrInsertComputed(invalidKey,
      () => log.push(`Unexpected evaluation of callback function, key: ${invalidKey}`));
  }, `${typeof invalidKey} not allowed as WeakMap key`);
}

assert.throws(TypeError, function () {
  s.getOrInsertComputed(Symbol.for('registered symbol'),
    () => log.push("Unexpected callback evaluation"));
}, 'Registered symbol not allowed as WeakMap key');

assert.compareArray(log, []);
