

/*---
esid: sec-object.hasown
info: Object.hasOwn has not prototype property
description: >
    Checking if obtaining the prototype property of Object.hasOwn fails
author: Jamie Kyle
features: [Object.hasOwn]
---*/

assert.sameValue(Object.hasOwn.prototype, undefined);
