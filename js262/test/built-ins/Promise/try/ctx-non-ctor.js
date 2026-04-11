

/*---
description: Promise.try errors when the receiver is not a constructor
esid: sec-promise.try
features: [promise-try]
---*/

assert.throws(TypeError, function () {
  Promise.try.call(eval);
});
