

/*---
esid: sec-object.getownpropertydescriptor
description: >
  Symbol primitive as first argument is coerced to object.
info: |
  Object.getOwnPropertyDescriptor ( O, P )

  1. Let obj be ? ToObject(O).
  [...]
  3. Let desc be ? obj.[[GetOwnProperty]](key).
  4. Return FromPropertyDescriptor(desc).

  Properties of Symbol Instances

  Symbol instances are ordinary objects that inherit properties from the Symbol prototype object.
  Symbol instances have a [[SymbolData]] internal slot.
  The [[SymbolData]] internal slot is the Symbol value represented by this Symbol object.
features: [Symbol]
---*/

assert.sameValue(Object.getOwnPropertyDescriptor(Symbol(), 'foo'), undefined);
assert.sameValue(Object.getOwnPropertyDescriptor(Symbol('foo'), 'description'), undefined);
