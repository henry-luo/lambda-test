

/*---
info: "[[hasProperty]] is sensitive to property existence but [[Get]] is not"
es5id: 8.12.6_A3
description: >
    Use [[hasProperty]] and [[Get]] for existent and not existent
    properties
---*/

var __obj={}; __obj.hole=undefined;


if (__obj.hole !== undefined) {
  throw new Test262Error('#1: var __obj={}; __obj.hole=undefined; __obj.hole === undefined. Actual: ' + (__obj.hole));
}


if (__obj.notexist !== undefined) {
  throw new Test262Error('#2: var __obj={}; __obj.hole=undefined; __obj.notexist === undefined. Actual: ' + (__obj.notexist));
}


if (!("hole" in __obj)) {
  throw new Test262Error('#3: var __obj={}; __obj.hole=undefined; "hole" in __obj');
}


if (("notexist" in __obj)) {
  throw new Test262Error('#4: var __obj={}; __obj.hole=undefined; "notexist" in __obj');
}

