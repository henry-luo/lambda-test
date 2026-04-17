

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-TypedArray-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
let ta = new BigInt64Array(10);

let obj = {
  get length() {
    $262.detachArrayBuffer(ta.buffer);
    return 1;
  },
  0: {
    valueOf() {
      return "huzzah!";
    }
  },
};


assertThrowsInstanceOf(() => ta.set(obj), SyntaxError);

