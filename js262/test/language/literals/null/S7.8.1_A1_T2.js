

/*---
info: "Literal :: NullLiteral"
es5id: 7.8.1_A1_T2
description: Check RegExp("0").exec("1") === null
---*/


if (RegExp("0").exec("1") !== null) {
  throw new Test262Error('#1: RegExp("0").exec("1") === null');
}
