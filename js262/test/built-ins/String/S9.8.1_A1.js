

/*---
info: If m is NaN, return the string "NaN"
es5id: 9.8.1_A1
description: NaN convert to String by explicit transformation
---*/


if (String(NaN) !== "NaN") {
  throw new Test262Error('#1: String(NaN) === Not-a-Number Actual: ' + (String(NaN)));
}


if (String(Number.NaN) !== "NaN") {
  throw new Test262Error('#2: String(Number.NaN) === Not-a-Number Actual: ' + (String(Number.NaN)));
}


if (String(Number("asasa")) !== "NaN") {
  throw new Test262Error('#3: String(Number("asasa")) === Not-a-Number Actual: ' + (String(Number("asasa"))));
}
