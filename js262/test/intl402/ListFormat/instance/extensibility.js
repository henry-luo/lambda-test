

/*---
esid: sec-Intl.ListFormat
description: Intl.ListFormat instance object extensibility
info: |
    17 ECMAScript Standard Built-in Objects:

    Unless specified otherwise, the [[Extensible]] internal slot
    of a built-in object initially has the value true.
features: [Intl.ListFormat]
---*/

assert.sameValue(
  Object.isExtensible(new Intl.ListFormat()),
  true,
  "Object.isExtensible(new Intl.ListFormat()) returns true"
);
