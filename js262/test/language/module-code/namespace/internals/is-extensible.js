

/*---
esid: sec-module-namespace-exotic-objects-isextensible
description: The [[IsExtensible]] internal method returns `false`
flags: [module]
---*/

import * as ns from './is-extensible.js';

assert.sameValue(Object.isExtensible(ns), false);
