

/*---
es5id: 15.8.2.12-1
description: Math.min({}) is NaN
---*/

assert.sameValue(Math.min({}), NaN);
