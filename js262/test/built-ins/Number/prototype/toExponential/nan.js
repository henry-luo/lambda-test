

/*---
esid: sec-number.prototype.toexponential
description: >
  Return "NaN" if this is NaN
info: |
  Number.prototype.toExponential ( fractionDigits )

  1. Let x be ? thisNumberValue(this value).
  2. Let f be ? ToInteger(fractionDigits).
  3. Assert: f is 0, when fractionDigits is undefined.
  4. If x is NaN, return the String "NaN".
  [...]
---*/

assert.sameValue(NaN.toExponential(Infinity), "NaN", "NaN value");

var n = new Number(NaN);
assert.sameValue(n.toExponential(NaN), "NaN", "NaN obj");
