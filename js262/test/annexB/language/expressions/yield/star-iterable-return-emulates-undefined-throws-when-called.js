

/*---
esid: sec-generator-function-definitions-runtime-semantics-evaluation
description: >
    If <iterator>.return is an object emulating `undefined` (e.g. `document.all`
    in browsers), it shouldn't be treated as if it were actually `undefined` by
    the yield* operator.
features: [generators, IsHTMLDDA]
---*/

var IsHTMLDDA = $262.IsHTMLDDA;
var iter = {
  [Symbol.iterator]() { return this; },
  next() { return {}; },
  return: IsHTMLDDA,
};

var outer = (function*() { yield* iter; })();

outer.next();

assert.throws(TypeError, function() {
  
  
  var emptyString = "";
  outer.return(emptyString);
});
