

/*---
esid: sec-Intl.DurationFormat
description: Intl.DurationFormat instance object extensibility
info: |
    17 ECMAScript Standard Built-in Objects:

    Unless specified otherwise, the [[Extensible]] internal slot
    of a built-in object initially has the value true.

features: [Intl.DurationFormat]
---*/

assert.sameValue(
  Object.isExtensible(new Intl.DurationFormat()),
  true,
  "Object.isExtensible(new Intl.DurationFormat()) returns true"
);

