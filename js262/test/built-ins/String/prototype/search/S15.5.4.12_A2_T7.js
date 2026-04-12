

/*---
info: String.prototype.search (regexp) returns ...
es5id: 15.5.4.12_A2_T7
description: Simple search sentence inside string
---*/

var aString = new String("test string probe");


if (aString.search("string pro") !== 5) {
  throw new Test262Error('#1: var aString = new String("test string probe"); aString.search("string pro")=== 5. Actual: ' + aString.search("string pro"));
}

