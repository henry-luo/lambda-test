

/*---
info: If one expression is undefined or null and another is not, return false
es5id: 11.9.2_A6.2_T2
description: y is null or undefined, x is not
---*/


if ((false != undefined) !== true) {
  throw new Test262Error('#1: (false != undefined) === true');
}


if ((Number.NaN != undefined) !== true) {
  throw new Test262Error('#2: (Number.NaN != undefined) === true');
}


if (("undefined" != undefined) !== true) {
  throw new Test262Error('#3: ("undefined" != undefined) === true');
}


if (({} != undefined) !== true) {
  throw new Test262Error('#4: ({} != undefined) === true');
}


if ((false != null) !== true) {
  throw new Test262Error('#5: (false != null) === true');
}


if ((0 != null) !== true) {
  throw new Test262Error('#6: (0 != null) === true');
}


if (("null" != null) !== true) {
  throw new Test262Error('#7: ("null" != null) === true');
}


if (({} != null) !== true) {
  throw new Test262Error('#8: ({} != null) === true');
}
