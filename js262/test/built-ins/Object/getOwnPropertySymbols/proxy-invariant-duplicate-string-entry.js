

/*---
esid: sec-object.getownpropertysymbols
description: >
  Proxy [[OwnPropertyKeys]] trap does not skip string keys when validating invariant:
  * The returned List contains no duplicate entries.
info: |
  Object.getOwnPropertySymbols ( O )

  1. Return ? GetOwnPropertyKeys(O, Symbol).

  GetOwnPropertyKeys ( O, type )

  ...
  2. Let keys be ? obj.[[OwnPropertyKeys]]().

  [[OwnPropertyKeys]] ( )

  ...
  8. Let trapResult be ? CreateListFromArrayLike(trapResultArray, « String, Symbol »).
  9. If trapResult contains any duplicate entries, throw a TypeError exception.
features: [Proxy]
---*/

var proxy = new Proxy({}, {
  ownKeys: function() {
    return ['a', 'a'];
  },
});

assert.throws(TypeError, function() {
  Object.getOwnPropertySymbols(proxy);
});
