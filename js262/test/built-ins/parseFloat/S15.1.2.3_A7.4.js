

/*---
info: The length property of parseFloat is 1
esid: sec-parsefloat-string
description: parseFloat.length === 1
---*/


if (parseFloat.length !== 1) {
  throw new Test262Error('#1: parseFloat.length === 1. Actual: ' + (parseFloat.length));
}
