

/*---
es6id: 21.1.3.12
description: >
  Throws a RangeError if ToString(form) value is not a valid form name.
info: |
  21.1.3.12 String.prototype.normalize ( [ form ] )

  ...
  7. If f is not one of "NFC", "NFD", "NFKC", or "NFKD", throw a RangeError
  exception.
---*/

assert.throws(RangeError, function() {
  'foo'.normalize('bar');
});

assert.throws(RangeError, function() {
  'foo'.normalize('NFC1');
});

assert.throws(RangeError, function() {
  'foo'.normalize(null);
});
