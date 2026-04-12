

/*---
esid: sec-temporal.duration.prototype.round
description: relativeTo object must contain at least the required correctly-spelled properties
features: [Temporal]
---*/

const hours25 = new Temporal.Duration(0, 0, 0, 0, 25, 0, 0, 0, 0, 0);

assert.throws(TypeError, () => hours25.round({
  largestUnit: "days",
  relativeTo: {
    month: 11,
    day: 3
  }
}));
assert.throws(TypeError, () => hours25.round({
  largestUnit: "days",
  relativeTo: {
    year: 2019,
    month: 11
  }
}));
assert.throws(TypeError, () => hours25.round({
  largestUnit: "days",
  relativeTo: {
    year: 2019,
    day: 3
  }
}));
