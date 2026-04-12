

/*---
info: If Type(x) and Type(y) are Null-s, return false
es5id: 11.9.5_A6.2
description: null === null
---*/


if (null !== null) {
  throw new Test262Error('#1: null === null');
}
