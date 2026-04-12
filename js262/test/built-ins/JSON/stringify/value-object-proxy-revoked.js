

/*---
esid: sec-serializejsonobject
description: >
  Revoked object proxy value produces a TypeError.
info: |
  JSON.stringify ( value [ , replacer [ , space ] ] )

  [...]
  12. Return ? SerializeJSONProperty(the empty String, wrapper).

  SerializeJSONProperty ( key, holder )

  [...]
  10. If Type(value) is Object and IsCallable(value) is false, then
    [...]
    c. Return ? SerializeJSONObject(value).

  SerializeJSONObject ( value )

  [...]
  6. Else,
    a. Let K be ? EnumerableOwnPropertyNames(value, "key").
features: [Proxy]
---*/

var handle = Proxy.revocable({}, {});

handle.revoke();

assert.throws(TypeError, function() {
  JSON.stringify(handle.proxy);
}, 'top-level value');

assert.throws(TypeError, function() {
  JSON.stringify({a: {b: handle.proxy}});
}, 'nested value');
