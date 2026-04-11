

/*---
esid: sup-string.prototype.tolocalelowercase
description: >
  All locale identifiers are validated, not just the first one.
info: |
  String.prototype.toLocaleLowerCase ( [ locales ] )
    ...
    3. Return ? TransformCase(S, locales, lower).

  TransformCase ( S, locales, targetCase )
    1. Let requestedLocales be ? CanonicalizeLocaleList(locales).
    ...
---*/

var locales = [
  "en-US",
  "this is not a valid locale",
];

assert.throws(RangeError, function() {
  "".toLocaleLowerCase(locales);
});
