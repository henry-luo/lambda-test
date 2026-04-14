

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
const nativeErrors = [
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError
];

assert.sameValue(Reflect.getPrototypeOf(Error.prototype), Object.prototype)

for (const error of nativeErrors) {
    assert.sameValue(Reflect.getPrototypeOf(error.prototype), Error.prototype);
}

