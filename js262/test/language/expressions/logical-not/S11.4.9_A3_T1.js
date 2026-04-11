

/*---
info: Operator !x returns !ToBoolean(x)
es5id: 11.4.9_A3_T1
description: Type(x) is boolean primitive or Boolean object
---*/


if (!false !== true) {
  throw new Test262Error('#1: !false === true');
}


if (!new Boolean(true) !== false) {
  throw new Test262Error('#2: !new Boolean(true) === false');
}


if (!new Boolean(false) !== false) {
  throw new Test262Error('#3: !new Boolean(false) === false');
}
