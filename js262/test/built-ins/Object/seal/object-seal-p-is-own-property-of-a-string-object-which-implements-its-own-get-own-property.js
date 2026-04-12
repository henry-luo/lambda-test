

/*---
esid: sec-setintegritylevel
description: >
    Object.seal - 'P' is own property of a String object which
    implements its own [[GetOwnProperty]]
includes: [propertyHelper.js]
---*/

var obj = new String("abc");

obj.foo = 10;

assert(Object.isExtensible(obj));
Object.seal(obj);

verifyProperty(obj, "foo", {
  value: 10,
  configurable: false,
});
