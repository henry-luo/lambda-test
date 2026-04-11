

/*---
es6id: 26.1.4
description: >
  Delete a symbol property.
info: |
  26.1.4 Reflect.deleteProperty ( target, propertyKey )

  ...
  2. Let key be ToPropertyKey(propertyKey).
  ...

  7.1.14 ToPropertyKey ( argument )

  ...
  3. If Type(key) is Symbol, then
    a. Return key.
  ...
features: [Reflect, Symbol]
---*/

var s = Symbol('1');
var o = {};
o[s] = 42;

Reflect.deleteProperty(o, s);

assert.sameValue(o.hasOwnProperty(s), false);
assert.sameValue(o[s], undefined);
