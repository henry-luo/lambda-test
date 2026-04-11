

/*---
info: If property of object not exist, return undefined
es5id: 8.1_A4
description: Check value of not existed property
---*/


if ((new Object()).newProperty !== undefined) {
  throw new Test262Error('#1: (new Object()).newProperty === undefined. Actual: ' + ((new Object()).newProperty));
}
