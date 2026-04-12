

/*---
esid: sec-Intl.RelativeTimeFormat
description: Checks handling of a null options argument to the RelativeTimeFormat constructor.
info: |
    InitializeRelativeTimeFormat (relativeTimeFormat, locales, options)
    5. Else
        a. Let options be ? ToObject(options).
features: [Intl.RelativeTimeFormat]
---*/

assert.sameValue(typeof Intl.RelativeTimeFormat, "function");

assert.throws(TypeError, function() { new Intl.RelativeTimeFormat([], null) })
