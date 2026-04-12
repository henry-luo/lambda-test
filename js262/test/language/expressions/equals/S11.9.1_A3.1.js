

/*---
info: |
    Return true, if x and y are both true or both false; otherwise, return
    false
es5id: 11.9.1_A3.1
description: x and y are boolean primitives
---*/


if ((true == true) !== true) {
  throw new Test262Error('#1: (true == true) === true');
}


if ((false == false) !== true) {
  throw new Test262Error('#2: (false == false) === true');
}


if ((true == false) !== false) {
  throw new Test262Error('#3: (true == false) === false');
}


if ((false == true) !== false) {
  throw new Test262Error('#4: (false == true) === false');
}
