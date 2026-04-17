

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-TypedArray-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


for (var ctor of anyTypedArrayConstructors) {
    var testArray = new ctor(1024);
    Object.defineProperty(testArray, "buffer", { get() { throw new Error("FAIL: Buffer accessed directly"); }  });
    testArray.sort();
}

