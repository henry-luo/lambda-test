

/*---
flags:
  - onlyStrict
includes: [sm/non262.js, sm/non262-shell.js]
description: |
  pending
esid: pending
---*/
"use strict";

var target = { test: true };
Object.preventExtensions(target);

var proxy = new Proxy(target, {
    deleteProperty(target, property) {
        return true;
    }
});

assert.sameValue(delete proxy.missing, true);
assert.sameValue(Reflect.deleteProperty(proxy, "missing"), true);

assertThrowsInstanceOf(() => { delete proxy.test; }, TypeError);
assertThrowsInstanceOf(() => Reflect.deleteProperty(proxy, "test"), TypeError);

