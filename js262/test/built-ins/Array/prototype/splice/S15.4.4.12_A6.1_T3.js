

/*---
info: Array.prototype.splice sets `length` on `this`
esid: sec-array.prototype.splice
description: Array.prototype.splice throws if `length` is read-only
---*/

var a = {
  get length() {
    return 0;
  },
  splice: Array.prototype.splice
};

try {
  a.splice(1, 2, 4);
  throw new Test262Error("Expected a TypeError");
} catch (e) {
  if (!(e instanceof TypeError)) {
    throw e;
  }
}
