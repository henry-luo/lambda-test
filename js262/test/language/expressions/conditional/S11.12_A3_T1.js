

/*---
info: If ToBoolean(x) is false, return z
es5id: 11.12_A3_T1
description: Type(y) and Type(z) are boolean primitives
---*/


if ((false ? false : true) !== true) {
  throw new Test262Error('#1: (false ? false : true) === true');
}


var z = new Boolean(true);
if ((false ? true : z) !== z) {
  throw new Test262Error('#2: (var y = new Boolean(true); (false ? true : z) === z');
}
