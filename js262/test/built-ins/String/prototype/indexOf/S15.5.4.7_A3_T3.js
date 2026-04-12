

/*---
info: |
    Since we deal with max(ToInteger(pos), 0) if ToInteger(pos) less than 0
    indexOf(searchString,0) returns
es5id: 15.5.4.7_A3_T3
description: >
    Call "$$abcdabcd".indexOf("ab",function(){return -Infinity;}())
    and check result
---*/


if ("$$abcdabcd".indexOf("ab", function() {
    return -Infinity;
  }()) !== 2) {
  throw new Test262Error('#1: "$$abcdabcd".indexOf("ab", function(){return -Infinity;}())===2. Actual: ' + ("$$abcdabcd".indexOf("ab", function() {
    return -Infinity;
  }())));
}

