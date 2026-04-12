

/*---
esid: sec-module-namespace-exotic-objects-preventextensions
description: The [[PreventExtensions]] internal method returns `true`
flags: [module]
features: [Reflect]
---*/

import * as ns from './prevent-extensions.js';


Object.preventExtensions(ns);

assert.sameValue(Reflect.preventExtensions(ns), true);
