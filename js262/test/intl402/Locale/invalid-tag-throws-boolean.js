

/*---
esid: sec-intl.locale
description: >
  Verifies the type check on the tag argument to Intl.Locale.
info: |
  Intl.Locale( tag [, options] )

  7. If Type(tag) is not String or Object, throw a TypeError exception.
features: [Intl.Locale]
---*/

assert.sameValue(typeof Intl.Locale, "function");

assert.throws(TypeError, function() {
  new Intl.Locale(true);
}, "true is an invalid tag value");
assert.throws(TypeError, function() {
  new Intl.Locale(false);
}, "false is an invalid tag value");
