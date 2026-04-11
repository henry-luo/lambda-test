

/*---
es6id: 26.1.14
description: >
  Throws a TypeError if proto is not Object or proto is not null.
info: |
  26.1.14 Reflect.setPrototypeOf ( target, proto )

  ...
  2. If Type(proto) is not Object and proto is not null, throw a TypeError
  exception
  ...
features: [Reflect, Reflect.setPrototypeOf]
---*/

assert.throws(TypeError, function() {
  Reflect.setPrototypeOf({}, undefined);
});

assert.throws(TypeError, function() {
  Reflect.setPrototypeOf({}, 1);
});

assert.throws(TypeError, function() {
  Reflect.setPrototypeOf({}, 'string');
});

assert.throws(TypeError, function() {
  Reflect.setPrototypeOf({}, true);
});
