

/*---
es6id: 26.3.1
esid: sec-@@tostringtag
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "Module".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
flags: [module]
features: [Symbol.toStringTag]
---*/

import * as ns from './Symbol.toStringTag.js';
assert.sameValue(ns[Symbol.toStringTag], 'Module');


var desc = Object.getOwnPropertyDescriptor(ns, Symbol.toStringTag);

assert.sameValue(desc.enumerable, false, 'reports as non-enumerable');
assert.sameValue(desc.writable, false, 'reports as non-writable');
assert.sameValue(desc.configurable, false, 'reports as non-configurable');
