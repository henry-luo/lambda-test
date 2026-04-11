

/*---
info: Result of number conversion from null value is +0
es5id: 9.3_A2_T1
description: null convert to Number by explicit transformation
---*/
assert.sameValue(Number(null), 0, 'Number(null) must return 0');
