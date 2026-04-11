

/*---
es6id: 26.2.2.1
description: >
    The returned object has a proxy property which is the created Proxy object
    built with the given target and handler given parameters.
info: |
    Proxy.revocable ( target, handler )

    6. Perform CreateDataProperty(result, "proxy", p).
features: [Proxy]
---*/

var target = {
  attr: "foo"
};
var r = Proxy.revocable(target, {
  get: function(t, prop) {
    return t[prop] + "!";
  }
});

assert.sameValue(r.proxy.attr, "foo!");
