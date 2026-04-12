

/*---
info: String.prototype.search (regexp) returns ...
es5id: 15.5.4.12_A2_T2
description: Checking case sensitive of search, argument is string
---*/

var aString = new String("test string");


if (aString.search("String") !== -1) {
  throw new Test262Error('#1: var aString = new String("test string"); aString.search("String")=== -1. Actual: ' + aString.search("String"));
}

