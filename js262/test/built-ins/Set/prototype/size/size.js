

/*---
esid: sec-get-set.prototype.size
description: >
    get Set.prototype.size

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

var descriptor = Object.getOwnPropertyDescriptor(Set.prototype, "size");

assert.sameValue(
  typeof descriptor.get,
  "function",
  "`typeof descriptor.get` is `'function'`"
);
assert.sameValue(
  typeof descriptor.set,
  "undefined",
  "`typeof descriptor.set` is `\"undefined\"`"
);

verifyNotEnumerable(Set.prototype, "size");
verifyConfigurable(Set.prototype, "size");
