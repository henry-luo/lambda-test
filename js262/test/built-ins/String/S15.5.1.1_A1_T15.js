

/*---
info: |
    When String is called as a function rather than as a constructor, it
    performs a type conversion
es5id: 15.5.1.1_A1_T15
description: Call String(string_object)
---*/

var __obj__str = "caps";


var __str = String(__obj__str);


if (__str !== __obj__str) {
  throw new Test262Error('#1: __obj__str = "caps"; __str = String(__obj__str); __str === __obj__str. Actual: __str ===' + __str);
}

