

/*---
info: String.prototype.search (regexp)
es5id: 15.5.4.12_A1_T6
description: Argument is x, and instance is new String, x is undefined variable
---*/


if (new String("undefined").search(x) !== 0) {
  throw new Test262Error('#1: var x; new String("undefined").search(x) === 0. Actual: ' + new String("undefined").search(x));
}


var x;
