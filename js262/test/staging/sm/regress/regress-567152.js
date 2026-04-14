

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
function c(a) {
    this.f = function () { a; };
}
c(0);  
Object.defineProperty(this, "f", {configurable: true, enumerable: true, value: 3});

