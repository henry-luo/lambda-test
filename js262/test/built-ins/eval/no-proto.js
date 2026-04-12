

/*---
info: The eval property has not prototype property
esid: sec-eval-x
description: Checking eval.prototype
---*/


if (eval.prototype !== undefined) {
  throw new Test262Error('#1: eval.prototype === undefined. Actual: ' + (eval.prototype));
}
