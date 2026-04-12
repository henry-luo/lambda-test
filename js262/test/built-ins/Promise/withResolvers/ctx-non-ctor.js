

/*---
description: Promise.withResolvers errors when the receiver is not a constructor
esid: sec-promise.withresolvers
features: [promise-with-resolvers]
---*/

assert.throws(TypeError, function() {
  Promise.withResolvers.call(eval);
});
