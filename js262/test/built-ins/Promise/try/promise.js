

/*---
description: Promise.try return value is a Promise
features: [promise-try]
---*/

var instance = Promise.try(function () {});

assert.sameValue(instance.constructor, Promise);
assert.sameValue(instance instanceof Promise, true);
