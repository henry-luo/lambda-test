

/*---
info: String has length property whose value is 1
es5id: 15.5.3_A1
description: Checking String.length
---*/


if (String.length !== 1) {
  throw new Test262Error('String has length property whose value is 1. Actual: String.length===' + String.length);
}

