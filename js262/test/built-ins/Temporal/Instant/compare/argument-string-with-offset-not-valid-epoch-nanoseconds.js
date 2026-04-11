

/*---
esid: sec-temporal.instant.compare
description: >
  Throws when argument at maximum representable date/time value with a negative offset.
features: [Temporal]
---*/


var one = "+275760-09-13T00:00:00.000-12";

var two = {
  toString() {
    throw new Test262Error();
  }
};

assert.throws(RangeError, () => Temporal.Instant.compare(one, two));
