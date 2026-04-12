

/*---
esid: sec-iteratorclose
description: >
    If <iterator>.return is an object emulating `undefined` (e.g. `document.all`
    in browsers), it shouldn't be treated as if it were actually `undefined`.
features: [generators, IsHTMLDDA]
---*/

var IsHTMLDDA = $262.IsHTMLDDA;
var iter = {
  [Symbol.iterator]() { return this; },
  next() { return {}; },
  return: IsHTMLDDA,
};

assert.throws(TypeError, function() {
  
  
  for (var x of iter)
    break;
});
