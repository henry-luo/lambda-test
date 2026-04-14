

/*---
flags:
  - onlyStrict
includes: [sm/non262.js, sm/non262-shell.js]
description: |
  pending
esid: pending
---*/
"use strict";

Object.defineProperty(String.prototype, "toLocaleString", {
    get() {
        assert.sameValue(typeof this, "string");

        return function() { return typeof this; };
    }
})

assert.sameValue(["test"].toLocaleString(), "string");

