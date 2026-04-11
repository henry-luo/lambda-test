

/*---
info: |
    Type(x) and Type(y) are Boolean-s.
    Return true, if x and y are both true and both false; otherwise, return false
es5id: 11.9.4_A3
description: x and y are primitive booleans
---*/


if (!(true === true)) {
  throw new Test262Error('#1: true === true');
}


if (!(false === false)) {
  throw new Test262Error('#2: false === false');
}


if (true === false) {
  throw new Test262Error('#3: true !== false');
}


if (false === true) {
  throw new Test262Error('#4: false !== true');
}
