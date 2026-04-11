

/*---
esid: sec-setintegritylevel
description: >
    Object.seal - 'P' is own property of a Date object that uses
    Object's [[GetOwnProperty]]
includes: [propertyHelper.js]
---*/

var obj = new Date(0);

obj.foo = 10;

assert(Object.isExtensible(obj));
Object.seal(obj);

verifyProperty(obj, "foo", {
  value: 10,
  configurable: false,
});
