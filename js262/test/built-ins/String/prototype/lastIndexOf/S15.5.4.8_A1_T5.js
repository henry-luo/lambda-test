

/*---
info: String.prototype.lastIndexOf(searchString, position)
es5id: 15.5.4.8_A1_T5
description: >
    Call lastIndexOf(searchString, position) function with null
    argument of function object
---*/


if (function() {
    return "gnullunazzgnull"
  }().lastIndexOf(null) !== 11) {
  throw new Test262Error('#1: function(){return "gnullunazzgnull"}().lastIndexOf(null) === 11. Actual: ' + function() {
    return "gnullunazzgnull"
  }().lastIndexOf(null));
}

