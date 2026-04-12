

/*---
es5id: 15.12.1.1-0-3
description: >
    <FF> is not valid JSON whitespace as specified by the production
    JSONWhitespace.
---*/

assert.throws(SyntaxError, function() {
  JSON.parse('\u000c1234'); 
});
