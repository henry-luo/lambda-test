

/*---
esid: sec-module-namespace-exotic-objects-getprototypeof
description: The [[GetPrototypeOf]] internal method returns `null`
flags: [module]
---*/

import * as ns from './get-prototype-of.js';

assert.sameValue(ns instanceof Object, false);
assert.sameValue(Object.getPrototypeOf(ns), null);
