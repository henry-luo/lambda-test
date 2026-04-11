

/*---
flags:
  - onlyStrict
description: |
  pending
esid: pending
---*/

Object.defineProperty(String.prototype, "toLocaleString", {
    get() {
        assert.sameValue(typeof this, "string");

        return function() { return typeof this; };
    }
})

assert.sameValue(["test"].toLocaleString(), "string");
