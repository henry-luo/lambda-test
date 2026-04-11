

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys
description: >
    [[OwnPropertyKeys]] ( )

    6. If trap is undefined, then Return target.[[OwnPropertyKeys]]()
features: [Proxy]
---*/

var target = {
  foo: 1,
  bar: 2
};
var p = new Proxy(target, {});

var keys = Object.getOwnPropertyNames(p);

assert.sameValue(keys[0], "foo");
assert.sameValue(keys[1], "bar");

assert.sameValue(keys.length, 2);
