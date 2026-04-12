

/*---
esid: sec-promise.allsettled
description: Promise.allSettled is callable
features: [Promise.allSettled]
---*/

assert.sameValue(typeof Promise.allSettled, 'function');
