

/*---
esid: sec-module-namespace-exotic-objects-setprototypeof-v
description: >
  The [[SetPrototypeOf]] internal method returns `true` if
  passed `null`
flags: [module]
---*/

import * as ns from './set-prototype-of-null.js';

assert.sameValue(typeof Object.setPrototypeOf, 'function');
assert.sameValue(ns, Object.setPrototypeOf(ns, null));
