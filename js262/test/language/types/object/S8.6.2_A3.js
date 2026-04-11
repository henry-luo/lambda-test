

/*---
info: |
    The specification does not provide any means for a program to access
    [[class]] value except through Object.prototype.toString
es5id: 8.6.2_A3
description: Get [[class]] value except through Object.prototype.toString
---*/

var __obj={};


if (__obj.toString() !== "[object " + 'Object' + "]"){
  throw new Test262Error('#1: var __obj={}; __obj.toString() === "[object " + \'Object\' + "]". Actual: ' + (__obj.toString()));
}

