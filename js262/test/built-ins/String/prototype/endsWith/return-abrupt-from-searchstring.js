

/*---
es6id: 21.1.3.6
description: >
  Returns abrupt from ToString(searchString)
info: |
  21.1.3.6 String.prototype.endsWith ( searchString [ , endPosition] )

  ...
  7. Let searchStr be ToString(searchString).
  8. ReturnIfAbrupt(searchStr).
  ...
features: [String.prototype.endsWith]
---*/

var obj = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  ''.endsWith(obj);
});
