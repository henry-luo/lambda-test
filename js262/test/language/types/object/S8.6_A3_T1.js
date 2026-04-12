

/*---
info: Do not crash with pefixincrement custom property
es5id: 8.6_A3_T1
description: Try to implement pefixincrement for custom property
---*/

var __map={foo:'bar'};


++__map.foo;
assert.sameValue(__map.foo, NaN);

