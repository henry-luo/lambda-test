

/*---
es5id: 15.8.2.11-1
description: Math.max({}) is NaN
---*/

assert.sameValue(Math.max({}), NaN);
