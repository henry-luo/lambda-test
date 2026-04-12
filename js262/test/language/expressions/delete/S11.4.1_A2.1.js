

/*---
info: If Type(x) is not Reference, return true
esid: sec-delete-operator-runtime-semantics-evaluation
description: Checking primitive value and Object value cases
---*/


if (delete 1 !== true) {
  throw new Test262Error('#1: delete 1 === true');
}


if (delete new Object() !== true) {
  throw new Test262Error('#2: delete new Object() === true');
}
