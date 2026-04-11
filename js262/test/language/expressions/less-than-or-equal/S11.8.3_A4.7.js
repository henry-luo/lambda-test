

/*---
info: If x is -Infinity, return true
es5id: 11.8.3_A4.7
description: y is number primitive
---*/


if ((Number.NEGATIVE_INFINITY <= 0) !== true) {
  throw new Test262Error('#1: (-Infinity <= 0) === true');
}


if ((Number.NEGATIVE_INFINITY <= 1.1) !== true) {
  throw new Test262Error('#2: (-Infinity <= 1.1) === true');
}


if ((Number.NEGATIVE_INFINITY <= -1.1) !== true) {
  throw new Test262Error('#3: (-Infinity <= -1.1) === true');
}


if ((Number.NEGATIVE_INFINITY <= Number.POSITIVE_INFINITY) !== true) {
  throw new Test262Error('#4: (-Infinity <= +Infinity) === true');
}


if ((Number.NEGATIVE_INFINITY <= Number.MAX_VALUE) !== true) {
  throw new Test262Error('#5: (-Infinity <= Number.MAX_VALUE) === true');
}


if ((Number.NEGATIVE_INFINITY <= Number.MIN_VALUE) !== true) {
  throw new Test262Error('#6: (-Infinity <= Number.MIN_VALUE) === true');
}
