

/*---
esid: sec-iterator.concat
description: >
  Does not throw an error for iterable primitive wrapper objects
info: |
  Iterator.concat ( ...items )

  1. Let iterables be a new empty List.
  2. For each element item of items, do
    a. If item is not an Object, throw a TypeError exception.
    ...
features: [iterator-sequencing]
---*/

let desc = {
  value: function() {
    return {
      next: function() {
        return { done: true, value: undefined };
      },
    };
  },
  writable: false,
  enumerable: false,
  configurable: true,
};

Object.defineProperty(Boolean.prototype, Symbol.iterator, desc);
Object.defineProperty(Number.prototype, Symbol.iterator, desc);
Object.defineProperty(BigInt.prototype, Symbol.iterator, desc);

Object.defineProperty(Symbol.prototype, Symbol.iterator, desc);

Iterator.concat(
  Object(true),
  Object(123),
  Object(123n),
  Object("test"),
  Object(Symbol()),
).next();
