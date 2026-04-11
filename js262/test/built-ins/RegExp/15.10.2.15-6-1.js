

/*---
es5id: 15.10.2.15-6-1
description: >
    Pattern - SyntaxError was thrown when one character in CharSet 'A'
    greater than one character in CharSet 'B' (15.10.2.15
    CharacterRange step 6)
---*/

assert.throws(SyntaxError, function() {
  var regExp = new RegExp("^[z-a]$");
});
