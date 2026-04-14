

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-generators-shell.js]
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

var Generator = function*(){}.constructor;

assertThrowsInstanceOf(() => {
    Reflect.construct(Generator, ["@error"], newTarget);
}, SyntaxError);

assert.sameValue(getProtoCalled, false);

