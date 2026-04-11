

/*---
esid: sec-initializenumberformat
description: >
  Exception from accessing the "trailingZeroDisplay" option for the
  NumberFormat constructor should be propagated to the caller
features: [Intl.NumberFormat-v3]
---*/

assert.throws(Test262Error, function() {
  new Intl.NumberFormat('en', {
    get trailingZeroDisplay() {
      throw new Test262Error();
    }
  });
});
