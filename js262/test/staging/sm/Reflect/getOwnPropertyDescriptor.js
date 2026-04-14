

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-Reflect-shell.js, deepEqual.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

assert.deepEqual(
    Reflect.getOwnPropertyDescriptor({x: "hello"}, "x"),
    {value: "hello", writable: true, enumerable: true, configurable: true});
assert.sameValue(
    Reflect.getOwnPropertyDescriptor({x: "hello"}, "y"),
    undefined);
assert.deepEqual(
    Reflect.getOwnPropertyDescriptor([], "length"),
    {value: 0, writable: true, enumerable: false, configurable: false});

