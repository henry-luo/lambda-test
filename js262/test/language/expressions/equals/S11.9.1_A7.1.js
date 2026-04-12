

/*---
info: |
    Type(x) and Type(y) are Object-s.
    Return true, if x and y are references to the same Object; otherwise, return false
es5id: 11.9.1_A7.1
description: >
    Checking Boolean object, Number object, String object, Object
    object
---*/


if ((new Boolean(true) == new Boolean(true)) !== false) {
  throw new Test262Error('#1: (new Boolean(true) == new Boolean(true)) === false');
}


if ((new Number(1) == new Number(1)) !== false) {
  throw new Test262Error('#2: (new Number(1) == new Number(1)) === false');
}


if ((new String("x") == new String("x")) !== false) {
  throw new Test262Error('#3: (new String("x") == new String("x")) === false');
}


if ((new Object() == new Object()) !== false) {
  throw new Test262Error('#4: (new Object() == new Object()) === false');
}


var x, y;
x = {}; 
y = x;
if ((x == y) !== true) {
  throw new Test262Error('#5: x = {}; y = x; (x == y) === true');
}


if ((new Boolean(true) == new Number(1)) !== false) {
  throw new Test262Error('#6 (new Boolean(true) == new Number(1)) === false');
}


if ((new Number(1) == new String("1")) !== false) {
  throw new Test262Error('#7: (new Number(1) == new String("1")) === false');
}


if ((new String("1") == new Boolean(true)) !== false) {
  throw new Test262Error('#8: (new String("x") == new Boolean(true)) === false');
}
