

/*---
esid: sec-number.prototype.tostring
description: >
  Letters a-z are used for digits with values 10 through 35
info: |
  6. Return the String representation of this Number value using
  the radix specified by radixNumber. Letters a-z are used for
  digits with values 10 through 35. The precise algorithm is
  implementation-dependent, however the algorithm should be a
  generalization of that specified in 6.1.6.1.20.
---*/

for (let radix = 11; radix <= 36; radix++) {
  for (let i = 10; i < radix; i++) {
    assert.sameValue(i.toString(radix), String.fromCharCode(i + 87));
  }
}
