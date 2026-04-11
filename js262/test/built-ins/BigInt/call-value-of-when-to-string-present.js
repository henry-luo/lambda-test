

/*---
description: ToPrimitive receives "hint Number" as parameter, then valueOf needs to be called
esid: sec-bigint-constructor-number-value
info: |
  1. If NewTarget is not undefined, throw a TypeError exception.
  2. Let prim be ? ToPrimitive(value, hint Number).
  ...
features: [BigInt]
---*/

let o = {
  valueOf: function() {
    return 44;
  },

  toString: function() {
    throw new Test262Error("unreachable");
  }
}

assert.sameValue(BigInt(o), 44n);
