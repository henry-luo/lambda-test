

/*---
info: String.prototype.search (regexp) returns ...
es5id: 15.5.4.12_A2_T4
description: >
    Checking case sensitive of search, argument is RegExp with
    uppercase symbols
---*/

var bString = new String("one two three four five");
var regExp = /Four/;


if (bString.search(regExp) !== -1) {
  throw new Test262Error('#1: var bString = new String("one two three four five"); var regExp = /Four/; bString.search(regExp)=== -1. Actual: ' + bString.search(regExp));
}

