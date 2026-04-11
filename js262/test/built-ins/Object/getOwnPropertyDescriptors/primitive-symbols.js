

/*---
description: Object.getOwnPropertyDescriptors accepts Symbol primitives.
esid: sec-object.getownpropertydescriptors
author: Jordan Harband
features: [Symbol]
---*/

var result = Object.getOwnPropertyDescriptors(Symbol());

assert.sameValue(Object.keys(result).length, 0, 'symbol primitive has no descriptors');
