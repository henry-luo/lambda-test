

/*---
info: Do not crash with pefixincrement custom property
es5id: 8.6_A3_T2
description: Try to implement pefixincrement for not declared custom property
---*/

var __map={};


assert.sameValue(++__map.foo, NaN, "++__map.foo");


if (!("foo" in __map)) {
  throw new Test262Error('#2: var __map={}; "foo" in __map');
}

