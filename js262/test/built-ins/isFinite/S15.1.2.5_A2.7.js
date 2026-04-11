

/*---
info: The isFinite property can't be used as constructor
esid: sec-isfinite-number
description: >
    If property does not implement the internal [[Construct]] method,
    throw a TypeError exception
---*/

assert.throws(TypeError, () => {
  new isFinite();
  throw new Test262Error();
});
