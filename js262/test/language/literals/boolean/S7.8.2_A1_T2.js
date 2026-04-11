

/*---
info: "Literal :: BooleanLiteral"
es5id: 7.8.2_A1_T2
description: "BooleanLiteral :: false"
---*/


if (Boolean(false) !== false) {
  throw new Test262Error('#1: Boolean(false) === false. Actual: Boolean(false) === ' + (Boolean(false)));
}
