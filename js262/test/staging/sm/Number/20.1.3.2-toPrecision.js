

/*---
includes: [sm/assertThrowsValue.js]
description: |
  Number.prototype.toPrecision
info: bugzilla.mozilla.org/show_bug.cgi?id=818617
esid: pending
---*/


assert.sameValue(Number.prototype.toPrecision.call(NaN, 555), 'NaN');


assert.sameValue(Number.prototype.toPrecision.call(NaN, 5), 'NaN');


assert.sameValue(Number.prototype.toPrecision.call(Infinity, 555), 'Infinity');


assert.sameValue(Number.prototype.toPrecision.call(Infinity, 5), 'Infinity');


assert.sameValue(Number.prototype.toPrecision.call(-Infinity, 555), '-Infinity');


assert.sameValue(Number.prototype.toPrecision.call(-Infinity, 5), '-Infinity');


let x = 10;
assert.sameValue(Number.prototype.toPrecision.call(NaN, { valueOf() { x = 20; return 1; } }), 'NaN');
assert.sameValue(x, 20);


assertThrowsValue(
  () => Number.prototype.toPrecision.call(NaN, { valueOf() { throw "hello"; } }),
  "hello");


assert.throws(TypeError, () => Number.prototype.toPrecision.call("Hello"));
