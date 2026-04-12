

/*---
es6id: 12.2.5
description: >
    Throws when IdentifierReference is undefined
---*/

assert.throws(ReferenceError, function() {
  var o = {notDefined};
});
