

/*---
info: "Literal :: NullLiteral"
es5id: 7.8.1_A1_T1
description: Check null === null
---*/


if (null !== null) {
  throw new Test262Error('#1: null === null');
}
