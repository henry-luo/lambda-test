

/*---
info: "Literal :: BooleanLiteral"
es5id: 7.8.2_A1_T1
description: "BooleanLiteral :: true"
---*/


if (Boolean(true) !== true) {
  throw new Test262Error('#1: Boolean(true) === true. Actual: Boolean(true) === ' + (Boolean(true)));
}
