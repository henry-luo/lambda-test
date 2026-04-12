

/*---
info: The [[Class]] property of the newly constructed object is set to "String"
es5id: 15.5.2.1_A3
description: >
    Creating string object with "new String(string)" and changing
    toString property to Object.prototype.toString
---*/

var __str__obj = new String("seamaid");

__str__obj.toString = Object.prototype.toString;


if (__str__obj.toString() !== "[object " + "String" + "]") {
  throw new Test262Error('#1: var __str__obj = new String("seamaid"); __str__obj.toString = Object.prototype.toString; __str__obj.toString() === "[object String]". Actual: __str__obj.toString() ===' + __str__obj.toString());
}

