

/*---
es6id: 20.2.2.35
author: Ryan Lewis
description: Math.trunc should return NaN when called with NaN.
---*/

assert.sameValue(Math.trunc(NaN), NaN);
