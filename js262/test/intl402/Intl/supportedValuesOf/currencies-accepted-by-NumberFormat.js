

/*---
esid: sec-intl.supportedvaluesof
description: >
  The returned "currency" values can be used with NumberFormat.
info: |
  Intl.supportedValuesOf ( key )

  1. Let key be ? ToString(key).
  ...
  4. Else if key is "currency", then
    a. Let list be ! AvailableCurrencies( ).
  ...
  9. Return ! CreateArrayFromList( list ).

  AvailableCurrencies ( )
    The AvailableCurrencies abstract operation returns a List, ordered as if an
    Array of the same values had been sorted using %Array.prototype.sort% using
    undefined as comparefn, that contains unique, well-formed, and upper case
    canonicalized 3-letter ISO 4217 currency codes, identifying the currencies
    for which the implementation provides the functionality of Intl.DisplayNames
    and Intl.NumberFormat objects.
locale: [en]
features: [Intl-enumeration]
---*/

const currencies = Intl.supportedValuesOf("currency");

for (let currency of currencies) {
  let obj = new Intl.NumberFormat("en", {style: "currency", currency});
  assert.sameValue(obj.resolvedOptions().currency, currency,
                   `${currency} is supported by NumberFormat`);
}

