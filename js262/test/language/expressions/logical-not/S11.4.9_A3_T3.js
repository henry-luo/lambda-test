

/*---
info: Operator !x returns !ToBoolean(x)
es5id: 11.4.9_A3_T3
description: Type(x) is string primitive or String object
---*/


if (!"1" !== false) {
  throw new Test262Error('#1: !"1" === false');
}


if (!new String("0") !== false) {
  throw new Test262Error('#2: !new String("0") === false');
}


if (!"x" !== false) {
  throw new Test262Error('#3: !"x" === false');
}


if (!"" !== true) {
  throw new Test262Error('#4: !"" === true');
}


if (!new String("") !== false) {
  throw new Test262Error('#5: !new String("") === false');
}
