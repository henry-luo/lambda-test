

/*---
esid: sec-weakmap-iterable
description: >
  WeakMap ( [ iterable ] )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

verifyProperty(this, 'WeakMap', {
  writable: true,
  enumerable: false,
  configurable: true
});
