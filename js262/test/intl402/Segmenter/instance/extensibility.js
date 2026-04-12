

/*---
esid: sec-Intl.Segmenter
description: Intl.Segmenter instance object extensibility
info: |
    17 ECMAScript Standard Built-in Objects:

    Unless specified otherwise, the [[Extensible]] internal slot
    of a built-in object initially has the value true.
features: [Intl.Segmenter]
---*/

assert.sameValue(
  Object.isExtensible(new Intl.Segmenter()),
  true,
  "Object.isExtensible(new Intl.Segmenter()) returns true"
);
