

/*---
info: String.prototype.search (regexp) returns ...
es5id: 15.5.4.12_A2_T6
description: Searching the non-existent "notexist" substring
---*/

var aString = new String("test string");


if (aString.search("notexist") !== -1) {
  throw new Test262Error('#1: var aString = new String("test string"); aString.search("notexist")=== -1. Actual: ' + aString.search("notexist"));
}

