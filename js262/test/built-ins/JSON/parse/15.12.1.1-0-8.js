

/*---
es5id: 15.12.1.1-0-8
description: >
    U+2028 and U+2029 are not valid JSON whitespace as specified by
    the production JSONWhitespace.
---*/

assert.throws(SyntaxError, function() {
  JSON.parse('\u2028\u20291234'); 
});
