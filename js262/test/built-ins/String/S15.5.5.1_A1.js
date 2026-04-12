

/*---
info: |
    length property contains the number of characters in the String value
    represented by this String object
es5id: 15.5.5.1_A1
description: Create strings and check its length
---*/

var __str__instance = new String("ABC\u0041\u0042\u0043");


if (__str__instance.length !== 6) {
  throw new Test262Error('#1: var __str__instance = new String("ABC\\u0041\\u0042\\u0043"); __str__instance.length === 6, where __str__instance is new String("ABC\\u0041\\u0042\\u0043"). Actual: __str__instance.length ===' + __str__instance.length);
}


__str__instance = new String;


if (__str__instance.length !== 0) {
  throw new Test262Error('#2: __str__instance = new String; __str__instance.length === 0, where __str__instance is new String. Actual: __str__instance.length ===' + __str__instance.length);
}

