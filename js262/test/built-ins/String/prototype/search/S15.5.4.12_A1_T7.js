

/*---
info: String.prototype.search (regexp)
es5id: 15.5.4.12_A1_T7
description: Argument is undefined, and instance is new String
---*/


if (String("undefined").search(undefined) !== 0) {
  throw new Test262Error('#1: String("undefined").search(undefined) === 0. Actual: ' + String("undefined").search(undefined));
}

