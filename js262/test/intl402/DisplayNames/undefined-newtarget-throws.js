

/*---
esid: sec-Intl.DisplayNames
description: >
  Throws a TypeError if Intl.DisplayNames is called as a function.
info: |
  Intl.DisplayNames ([ locales [ , options ]])

  1. If NewTarget is undefined, throw a TypeError exception.
  ...
features: [Intl.DisplayNames]
---*/

assert.throws(TypeError, function() {
  Intl.DisplayNames();
});

assert.throws(TypeError, function() {
  Intl.DisplayNames('en');
});

assert.throws(TypeError, function() {
  Intl.DisplayNames(['en']);
});
