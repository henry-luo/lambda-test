

/*---
info: The parseFloat property has not prototype property
esid: sec-parsefloat-string
description: Checking parseFloat.prototype
---*/


if (parseFloat.prototype !== undefined) {
  throw new Test262Error('#1: parseFloat.prototype === undefined. Actual: ' + (parseFloat.prototype));
}
