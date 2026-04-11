

/*---
esid: sec-date.prototype.tojson
description: >
  Result of toISOString call is returned.
info: |
  Date.prototype.toJSON ( key )

  [...]
  4. Return ? Invoke(O, "toISOString").

  Invoke ( V, P [ , argumentsList ] )

  [...]
  3. Let func be ? GetV(V, P).
  4. Return ? Call(func, V, argumentsList).
---*/

var date = new Date(0);
assert.sameValue(date.toJSON(), date.toISOString());

var result = {};
assert.sameValue(
  Date.prototype.toJSON.call({
    toISOString: function() { return result; },  
  }),
  result
);
