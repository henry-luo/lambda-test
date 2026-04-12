

/*---
esid: pending
description: |
    The [[Prototype]] internal slot ofthe %RegExpStringIteratorPrototype% is the
    %IteratorPrototype% intrinsic object (25.1.2).
features: [Symbol.iterator, Symbol.matchAll]
---*/

var RegExpStringIteratorProto = Object.getPrototypeOf(/./[Symbol.matchAll]('a'));
var ArrayIteratorProto = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);

assert.sameValue(Object.getPrototypeOf(RegExpStringIteratorProto), ArrayIteratorProto);
