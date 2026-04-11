

/*---
esid: sec-object.getownpropertynames
description: >
  Proxy [[OwnPropertyKeys]] trap does not skip symbol keys when validating invariant:
  * The returned List contains no duplicate entries.
info: |
  Object.getOwnPropertyNames ( O )

  1. Return ? GetOwnPropertyKeys(O, String).

  GetOwnPropertyKeys ( O, type )

  ...
  2. Let keys be ? obj.[[OwnPropertyKeys]]().

  [[OwnPropertyKeys]] ( )

  ...
  8. Let trapResult be ? CreateListFromArrayLike(trapResultArray, « String, Symbol »).
  9. If trapResult contains any duplicate entries, throw a TypeError exception.
features: [Proxy, Symbol]
---*/

var symbol = Symbol();
var proxy = new Proxy({}, {
  ownKeys: function() {
    return [symbol, symbol];
  },
});

assert.throws(TypeError, function() {
  Object.getOwnPropertyNames(proxy);
});
