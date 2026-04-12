

/*---
info: Operator !x returns !ToBoolean(x)
es5id: 11.4.9_A3_T4
description: Type(x) is undefined or null
---*/


if (!void 0 !== true) {
  throw new Test262Error('#1: !void 0 === true');
}


if (!null !== true) {
  throw new Test262Error('#2: !null === true');
}
