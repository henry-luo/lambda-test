

/*---
esid: sec-set.prototype.intersection
description: Set.prototype.intersection RequireInternalSlot
info: |
    2. Perform ? RequireInternalSlot(O, [[SetData]])
features: [set-methods]
---*/

const intersection = Set.prototype.intersection;

assert.sameValue(typeof intersection, "function");

const realSet = new Set([]);

assert.throws(TypeError, () => intersection.call(undefined, realSet), "undefined");
assert.throws(TypeError, () => intersection.call(null, realSet), "null");
assert.throws(TypeError, () => intersection.call(true, realSet), "true");
assert.throws(TypeError, () => intersection.call("", realSet), "empty string");
assert.throws(TypeError, () => intersection.call(Symbol(), realSet), "symbol");
assert.throws(TypeError, () => intersection.call(1, realSet), "1");
assert.throws(TypeError, () => intersection.call(1n, realSet), "1n");
assert.throws(TypeError, () => intersection.call({}, realSet), "plain object");
assert.throws(TypeError, () => intersection.call([], realSet), "array");
assert.throws(TypeError, () => intersection.call(new Map(), realSet), "map");
assert.throws(TypeError, () => intersection.call(Set.prototype, realSet), "Set.prototype");
