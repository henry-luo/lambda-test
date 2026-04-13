

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var getProtoCalled = false;

var newTarget = Object.defineProperty(function(){}.bind(), "prototype", {
    get() {
        getProtoCalled = true;
        return null;
    }
});

assertThrowsInstanceOf(() => {
    Reflect.construct(Function, ["@error"], newTarget);
}, SyntaxError);

assert.sameValue(getProtoCalled, false);

