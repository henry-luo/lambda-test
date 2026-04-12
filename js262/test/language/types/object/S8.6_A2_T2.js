

/*---
info: Do not crash with postincrement custom property
es5id: 8.6_A2_T2
description: Try to implement postincrement for not declared custom property
---*/

var __map={};


assert.sameValue(__map.foo++, NaN);


if (!("foo" in __map)) {
  throw new Test262Error('#2: var __map={}; "foo" in __map');
}

