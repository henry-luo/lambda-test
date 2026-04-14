

/*---
flags:
  - onlyStrict
includes: [sm/non262.js, sm/non262-shell.js]
description: |
  pending
esid: pending
---*/
"use strict";

var y = new Proxy({}, {
    getOwnPropertyDescriptor(target, key) {
        if (key === "a") {
            return { configurable: true, get: function(v) {} };
        } else {
            assert.sameValue(key, "b");
            return { configurable: true, writable: false, value: 15 };
        }
    },

    defineProperty() {
        throw "not invoked";
    }
})


assertThrowsInstanceOf(() => y.a = 1, TypeError);
assertThrowsInstanceOf(() => y.b = 2, TypeError);

