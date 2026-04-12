

/*---
es6id: 13.6.4.10_S1.a.i
description: >
    const: invalid assignment in Statement body
---*/

assert.throws(TypeError, function() {
  for (const x in [1, 2, 3]) { x++ }
});
