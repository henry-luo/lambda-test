

/*---
info: |
    The String prototype object is itself a String object (its [[Class]] is "String")
es5id: 15.5.4_A1
description: >
    first we delete String.prototype.toString cause it overrides
    Object prototype toString.  Object.prototype.toString returns
    [object+[[class]]+]
---*/

delete String.prototype.toString;


if (String.prototype.toString() !== "[object " + "String" + "]") {
  throw new Test262Error('#1: delete String.prototype.toString; String.prototype.toString() === "[object "+"String"+"]". Actual: String.prototype.toString() ===' + String.prototype.toString());
}

