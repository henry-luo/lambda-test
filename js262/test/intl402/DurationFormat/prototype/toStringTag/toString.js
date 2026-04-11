

/*---
esid: sec-intl.DurationFormat.prototype-@@tostringtag
description: >
  Object.prototype.toString utilizes Intl.DurationFormat.prototype[@@toStringTag].
info: |
  Intl.DurationFormat.prototype [ @@toStringTag ]

  The initial value of the @@toStringTag property is the string value "Intl.DurationFormat".

features: [Intl.DurationFormat, Symbol.toStringTag]
---*/

assert.sameValue(Object.prototype.toString.call(Intl.DurationFormat.prototype), "[object Intl.DurationFormat]");
assert.sameValue(Object.prototype.toString.call(new Intl.DurationFormat()), "[object Intl.DurationFormat]");
