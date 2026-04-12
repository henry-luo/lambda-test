

/*---
esid: sec-Intl.DurationFormat
description: Checks handling of a null options argument to the DurationFormat constructor.
info: |
    Intl.DurationFormat ( [ locales [ , options ] ] )
    (...)
    4. Let options be GetOptionsObject(options).
features: [Intl.DurationFormat]
---*/

assert.sameValue(typeof Intl.DurationFormat, "function");

assert.throws(TypeError, function() { new Intl.DurationFormat([], null) })
