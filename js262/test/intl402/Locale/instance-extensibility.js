

/*---
esid: sec-intl.locale
description: >
    Intl.Locale instance object extensibility
info: |
  17 ECMAScript Standard Built-in Objects:

  Unless specified otherwise, the [[Extensible]] internal slot
  of a built-in object initially has the value true.
features: [Intl.Locale]
---*/

assert.sameValue(
  Object.isExtensible(new Intl.Locale('en')),
  true,
  "Object.isExtensible(new Intl.Locale('en')) returns true"
);
