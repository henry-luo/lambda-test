

/*---
esid: sec-intl.getcanonicallocales
description: Tests the getCanonicalLocales function for overridden Array.push().
info: |
  8.2.1 Intl.getCanonicalLocales (locales)
  1. Let ll be ? CanonicalizeLocaleList(locales).
  2. Return CreateArrayFromList(ll).
includes: [compareArray.js]
---*/

Array.prototype.push = function() { throw 42; };


var arr = Intl.getCanonicalLocales(["en-US"]);

assert.compareArray(arr, ["en-US"]);
