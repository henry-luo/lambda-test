

/*---
esid: sec-reflect-object
description: >
  Reflect.enumerate was removed and it's not a function anymore
features: [Reflect]
---*/

assert.sameValue(Reflect.hasOwnProperty("enumerate"), false);
assert.sameValue(Reflect.enumerate, undefined);
