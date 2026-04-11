

/*---
esid: sec-isfinite-number
description: >
  Return abrupt completion getting number.@@toPrimitive
info: |
  isFinite (number)

  1. Let num be ? ToNumber(number).

  ToPrimitive ( input [ , PreferredType ] )

  [...]
  4. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
features: [Symbol.toPrimitive]
---*/

var obj = Object.defineProperty({}, Symbol.toPrimitive, {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  isFinite(obj);
});
