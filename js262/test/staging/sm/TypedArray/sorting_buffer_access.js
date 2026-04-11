

/*---
includes: [sm/non262-TypedArray-shell.js]
description: |
  pending
esid: pending
---*/


for (var ctor of anyTypedArrayConstructors) {
    var testArray = new ctor(1024);
    Object.defineProperty(testArray, "buffer", { get() { throw new Error("FAIL: Buffer accessed directly"); }  });
    testArray.sort();
}

