

/*---
esid: sec-object-environment-records-hasbinding-n
description: >
  Lookups in proxy binding object for identifier reference.
info: |
  9.1.1.2.1 HasBinding ( N )

    1. Let bindingObject be envRec.[[BindingObject]].
    2. Let foundBinding be ? HasProperty(bindingObject, N).
    3. If foundBinding is false, return false.
    ...

features: [Proxy, Reflect]
flags: [noStrict]
includes: [compareArray.js, proxyTrapsHelper.js]
---*/

var log = [];


var env = {};

var proxy = new Proxy(env, allowProxyTraps({
  has(t, pk) {
    log.push("has:" + String(pk));
    return Reflect.has(t, pk);
  },
}));

with (proxy) {
  Object;
}

assert.compareArray(log, [
  
  "has:Object",
]);
