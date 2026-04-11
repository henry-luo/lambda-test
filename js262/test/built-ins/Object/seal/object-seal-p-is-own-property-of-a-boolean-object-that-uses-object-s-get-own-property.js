

/*---
esid: sec-setintegritylevel
description: >
    Object.seal - 'P' is own property of a Boolean object that uses
    Object's [[GetOwnProperty]]
includes: [propertyHelper.js]
---*/

var obj = new Boolean(false);

obj.foo = 10;

assert(Object.isExtensible(obj));
Object.seal(obj);

verifyProperty(obj, "foo", {
  value: 10,
  configurable: false,
});
