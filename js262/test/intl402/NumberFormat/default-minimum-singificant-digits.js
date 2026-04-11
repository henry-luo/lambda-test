

/*---
description: Tests that the default value of minimumSignificantDigits is 1.
esid: sec-setnfdigitoptions
---*/


assert.throws(RangeError, function() {
  Intl.NumberFormat(undefined, {maximumSignificantDigits: 0});
});


var res = Intl.NumberFormat(undefined, {maximumSignificantDigits: 1})

assert.sameValue(Object.getPrototypeOf(res), Intl.NumberFormat.prototype, 'result is an instance of NumberFormat')
assert.sameValue(res.resolvedOptions().minimumSignificantDigits, 1, 'default minimumSignificantDigits')
assert.sameValue(res.resolvedOptions().maximumSignificantDigits, 1, 'sets maximumSignificantDigits')
