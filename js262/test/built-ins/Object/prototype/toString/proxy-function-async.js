

/*---
esid: sec-object.prototype.tostring
description: Proxy of async function is treated as a function.
info: |
  ProxyCreate ( target, handler )

  [...]
  7. If IsCallable(target) is true, then
    a. Set P.[[Call]] as specified in 9.5.12.

  Object.prototype.toString ( )

  [...]
  7. Else if O has a [[Call]] internal method, let builtinTag be "Function".
features: [async-functions, Proxy, Symbol.toStringTag]
---*/

var asyncProxy = new Proxy(async function() {}, {});
var asyncProxyProxy = new Proxy(asyncProxy, {});

assert.sameValue(
  Object.prototype.toString.call(asyncProxy),
  '[object AsyncFunction]',
  'async function proxy'
);
assert.sameValue(
  Object.prototype.toString.call(asyncProxyProxy),
  '[object AsyncFunction]',
  'proxy for async function proxy'
);
