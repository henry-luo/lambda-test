

/*---
info: The String has property prototype
es5id: 15.5.3.1_A1
description: Checking String.hasOwnProperty('prototype')
---*/


if (!(String.hasOwnProperty('prototype'))) {
  throw new Test262Error('#1: String.hasOwnProperty(\'prototype\') return true. Actual: ' + String.hasOwnProperty('prototype'));
}

