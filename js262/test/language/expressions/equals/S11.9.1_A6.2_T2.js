

/*---
info: If one expression is undefined or null and another is not, return false
es5id: 11.9.1_A6.2_T2
description: y is null or undefined, x is not
---*/


if ((false == undefined) !== false) {
  throw new Test262Error('#1: (false == undefined) === false');
}


if ((Number.NaN == undefined) !== false) {
  throw new Test262Error('#2: (Number.NaN == undefined) === false');
}


if (("undefined" == undefined) !== false) {
  throw new Test262Error('#3: ("undefined" == undefined) === false');
}


if (({} == undefined) !== false) {
  throw new Test262Error('#4: ({} == undefined) === false');
}


if ((false == null) !== false) {
  throw new Test262Error('#5: (false == null) === false');
}


if ((0 == null) !== false) {
  throw new Test262Error('#6: (0 == null) === false');
}


if (("null" == null) !== false) {
  throw new Test262Error('#7: ("null" == null) === false');
}


if (({} == null) !== false) {
  throw new Test262Error('#8: ({} == null) === false');
}
