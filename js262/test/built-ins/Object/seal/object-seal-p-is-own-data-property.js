

/*---
esid: sec-setintegritylevel
description: Object.seal - 'P' is own data property
includes: [propertyHelper.js]
---*/

var obj = {};

obj.foo = 10; 

assert(Object.isExtensible(obj));
Object.seal(obj);

verifyProperty(obj, "foo", {
  value: 10,
  configurable: false,
});
