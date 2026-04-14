

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-Reflect-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

assert.sameValue(Reflect.getPrototypeOf({}), Object.prototype);
assert.sameValue(Reflect.getPrototypeOf(Object.prototype), null);
assert.sameValue(Reflect.getPrototypeOf(Object.create(null)), null);

var proxy = new Proxy({}, {
    getPrototypeOf(t) { return Math; }
});

assert.sameValue(Reflect.getPrototypeOf(proxy), Math);

