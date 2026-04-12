

/*---
description: Promise.withResolvers return value has a property called "promise" which is a Promise
esid: sec-promise.withresolvers
features: [promise-with-resolvers]
---*/


var instance = Promise.withResolvers();

assert.sameValue(instance.promise.constructor, Promise);
assert.sameValue(instance.promise instanceof Promise, true);

