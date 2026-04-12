

/*---
es6id: 26.1.4
description: >
  Return abrupt from ToPropertyKey(propertyKey)
info: |
  26.1.4 Reflect.deleteProperty ( target, propertyKey )

  ...
  2. Let key be ToPropertyKey(propertyKey).
  3. ReturnIfAbrupt(key).
  ...
features: [Reflect]
---*/

var p = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  Reflect.deleteProperty({}, p);
});
