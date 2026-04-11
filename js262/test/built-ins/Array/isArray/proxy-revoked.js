

/*---
esid: sec-array.isarray
es6id: 22.1.2.2
description: Revoked proxy value produces a TypeError
info: |
  1. Return IsArray(arg).

  7.2.2 IsArray

  [...]
  3. If argument is a Proxy exotic object, then
     a. If the value of the [[ProxyHandler]] internal slot of argument is null,
        throw a TypeError exception.
     b. Let target be the value of the [[ProxyTarget]] internal slot of
        argument.
     c. Return ? IsArray(target).
features: [Proxy]
---*/

var handle = Proxy.revocable([], {});

handle.revoke();

assert.throws(TypeError, function() {
  Array.isArray(handle.proxy);
}, 'Array.isArray(handle.proxy) throws a TypeError exception');
