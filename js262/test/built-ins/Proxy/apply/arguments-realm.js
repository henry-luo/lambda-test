

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist
description: >
  Arguments array is created in the Realm of the current execution context
info: |
  [...]
  7. Let argArray be CreateArrayFromList(argumentsList).
  8. Return ? Call(trap, handler, « target, thisArgument, argArray »).
features: [cross-realm]
---*/

var f = $262.createRealm().global.eval(
  'new Proxy(function() {}, { apply: function(_, __, args) { return args; } })'
);

assert.sameValue(f().constructor, Array);
