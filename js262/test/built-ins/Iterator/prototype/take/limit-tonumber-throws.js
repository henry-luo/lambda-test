

/*---
esid: sec-iteratorprototype.take
description: >
  Throws a RangeError exception when limit argument valueOf throws.
info: |
  %Iterator.prototype%.take ( limit )

  3. Let numLimit be ? ToNumber(limit).

features: [iterator-helpers]
---*/
let iterator = (function* () {})();

assert.throws(Test262Error, () => {
  iterator.take({
    valueOf: function () {
      throw new Test262Error();
    },
  });
});
