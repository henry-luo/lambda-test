

/*---
info: Result of ToString conversion from null value is "null"
es5id: 9.8_A2_T1
description: null convert to String by explicit transformation
---*/


if (String(null) !== "null") {
  throw new Test262Error('#1: String(null) === "null". Actual: ' + (String(null)));
}
