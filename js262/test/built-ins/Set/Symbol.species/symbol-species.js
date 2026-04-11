

/*---
esid: sec-get-set-@@species
description: Set[Symbol.species] exists per spec
info: |
  Set has a property at `Symbol.species`
author: Sam Mikes
includes: [propertyHelper.js]
features: [Symbol.species]
---*/

var desc = Object.getOwnPropertyDescriptor(Set, Symbol.species);

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, 'function');

verifyNotWritable(Set, Symbol.species, Symbol.species);
verifyNotEnumerable(Set, Symbol.species);
verifyConfigurable(Set, Symbol.species);
