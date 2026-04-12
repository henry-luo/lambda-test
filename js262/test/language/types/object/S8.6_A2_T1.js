

/*---
info: Do not crash with postincrement custom property
es5id: 8.6_A2_T1
description: Try to implement postincrement for custom property
---*/

var __map={foo:"bar"};


__map.foo++;
assert.sameValue(__map.foo, NaN);

