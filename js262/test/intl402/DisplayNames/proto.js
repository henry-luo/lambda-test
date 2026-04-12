

/*---
esid: sec-Intl.DisplayNames
description: >
  The internal prototype of Intl.DisplayNames
features: [Intl.DisplayNames]
---*/

var proto = Object.getPrototypeOf(Intl.DisplayNames);

assert.sameValue(proto, Function.prototype);
