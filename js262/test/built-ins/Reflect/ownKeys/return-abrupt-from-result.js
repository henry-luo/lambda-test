

/*---
es6id: 26.1.11
description: >
  Return abrupt result from target.[[OwnPropertyKeys]]()
info: |
  26.1.11 Reflect.ownKeys ( target )

  ...
  2. Let keys be target.[[OwnPropertyKeys]]().
  3. ReturnIfAbrupt(keys).
  ...
features: [Proxy, Reflect]
---*/

var o = {};
var p = new Proxy(o, {
  ownKeys: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  Reflect.ownKeys(p);
});
