

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver
description: >
    [[Set]] ( P, V, Receiver)

    7. If trap is undefined, then
      a. Return ? target.[[Set]](P, V, Receiver)

features: [Proxy]
---*/

var target = {
  attr: 1
};
var p = new Proxy(target, {
  set: undefined
});

p.attr = 2;

assert.sameValue(target.attr, 2);
