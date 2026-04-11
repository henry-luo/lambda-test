

/*---
info: |
    Return false, if x and y are both true or both false; otherwise, return
    true
es5id: 11.9.2_A3.1
description: x and y are boolean primitives
---*/


if ((true != true) !== false) {
  throw new Test262Error('#1: (true != true) === false');
}


if ((false != false) !== false) {
  throw new Test262Error('#2: (false != false) === false');
}


if ((true != false) !== true) {
  throw new Test262Error('#3: (true != false) === true');
}


if ((false != true) !== true) {
  throw new Test262Error('#4: (false != true) === true');
}
