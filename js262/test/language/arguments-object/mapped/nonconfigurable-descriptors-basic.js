

/*---
description: Mapped arguments object with non-configurable property property descriptor behavior
info: |
    Descriptor of a mapped value is updated when property is made non-configurable.
flags: [noStrict]
esid: sec-arguments-exotic-objects-defineownproperty-p-desc
includes: [propertyHelper.js]
---*/

function argumentsNonConfigurable(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  verifyProperty(arguments, "0", {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: false,
  });
}
argumentsNonConfigurable(1);
