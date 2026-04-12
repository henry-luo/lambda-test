

/*---
info: String.prototype.search (regexp) returns ...
es5id: 15.5.4.12_A2_T1
description: Simple search substring inside string
---*/

var aString = new String("test string");


if (aString.search("string") !== 5) {
  throw new Test262Error('#1: var aString = new String("test string"); aString.search("string")=== 5. Actual: ' + aString.search("string"));
}

