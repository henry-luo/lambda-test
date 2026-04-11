

/*---
esid: sec-intl.locale
description: >
    Intl.Locale instance object created from %LocalePrototype%.
info: |
  Intl.Locale( tag [, options] )

  6. Let locale be ?
    OrdinaryCreateFromConstructor(NewTarget, %LocalePrototype%,
    internalSlotsList).
features: [Intl.Locale]
---*/

const value = new Intl.Locale('en');
assert.sameValue(
    Object.getPrototypeOf(value),
    Intl.Locale.prototype,
    "Object.getPrototypeOf(value) equals the value of Intl.Locale.prototype"
);
