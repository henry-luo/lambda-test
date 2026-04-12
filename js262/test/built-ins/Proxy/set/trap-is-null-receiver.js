

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver
description: >
    Pass to target's [[Set]] correct receiver if trap is missing
info: |
    [[Set]] (P, V, Receiver)

    7. If trap is undefined, then
        a. Return ? target.[[Set]](P, V, Receiver).
features: [Proxy]
---*/

var context;
var target = {
  set attr(val) {
    context = this;
  }
};

var p = new Proxy(target, {
  set: null
});
p.attr = 1;
assert.sameValue(context, p);

var pParent = Object.create(new Proxy(target, {}));
pParent.attr = 3;
assert.sameValue(context, pParent);
