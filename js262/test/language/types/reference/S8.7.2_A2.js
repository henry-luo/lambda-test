

/*---
info: |
    x++ calls GetValue then PutValue so after applying postfix increment(actually conrete operator type is unimportant)
    we must have reference to defined value
es5id: 8.7.2_A2
description: Execute x++, where x is var x
---*/

var x;


if (x !== undefined) {
  throw new Test262Error('#1: var x; x === undefined. Actual: ' + (x));
}


x++;


if (x === undefined) {
  throw new Test262Error('#2: var x; x++; x !== undefined');
}

