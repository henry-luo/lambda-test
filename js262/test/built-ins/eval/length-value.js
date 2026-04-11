

/*---
info: The length property of eval is 1
esid: sec-eval-x
description: eval.length === 1
---*/


if (eval.length !== 1) {
  throw new Test262Error('#1: eval.length === 1. Actual: ' + (eval.length));
}
