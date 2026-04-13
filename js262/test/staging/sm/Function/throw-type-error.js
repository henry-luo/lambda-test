

/*---
includes: [sm/non262.js, sm/non262-shell.js, deepEqual.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


const ThrowTypeError = function(){
    "use strict";
    return Object.getOwnPropertyDescriptor(arguments, "callee").get;
}();

assert.deepEqual(Object.getOwnPropertyDescriptor(ThrowTypeError, "length"), {
    value: 0, writable: false, enumerable: false, configurable: false
});

assert.sameValue(Object.isFrozen(ThrowTypeError), true);

