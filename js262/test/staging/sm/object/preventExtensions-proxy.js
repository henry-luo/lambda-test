

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-object-shell.js, deepEqual.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


function logProxy(object = {}, handler = {}) {
    var log = [];
    var proxy = new Proxy(object, new Proxy(handler, {
        get(target, propertyKey, receiver) {
            log.push(propertyKey);
            return target[propertyKey];
        }
    }));
    return {proxy, log};
}

var {proxy, log} = logProxy();
Object.preventExtensions(proxy);
assert.deepEqual(log, ["preventExtensions"]);

var {proxy, log} = logProxy();
Object.preventExtensions(Object.preventExtensions(proxy));
assert.deepEqual(log, ["preventExtensions", "preventExtensions"]);

