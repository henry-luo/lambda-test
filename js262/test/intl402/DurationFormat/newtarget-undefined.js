

/*---
esid: sec-Intl.DurationFormat
description: >
    Verifies the NewTarget check for Intl.DurationFormat.
info: |
    Intl.DurationFormat ([ locales [ , options ]])
    (...)
    1. If NewTarget is undefined, throw a TypeError exception.
features: [Intl.DurationFormat]
---*/

assert.sameValue(typeof Intl.DurationFormat, "function");

assert.throws(TypeError, function() {
  Intl.DurationFormat();
});

assert.throws(TypeError, function() {
  Intl.DurationFormat("en");
});

assert.throws(TypeError, function() {
  Intl.DurationFormat("not-valid-tag");
});
