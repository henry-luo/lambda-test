

/*---
description: Property descriptor of mapped arguments object with non-configurable property
info: |
    Mapping keep working when property is set to non-configurable, and its
    descriptor needs to change properly.
flags: [noStrict]
esid: sec-arguments-exotic-objects-defineownproperty-p-desc
includes: [propertyHelper.js]
---*/

function argumentsAndSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  a = 2;

  verifyProperty(arguments, "0", {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: false,
  });
}
argumentsAndSetMutableBinding(1);

