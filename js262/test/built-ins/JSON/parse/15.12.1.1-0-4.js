

/*---
es5id: 15.12.1.1-0-4
description: >
    <NBSP> is not valid JSON whitespace as specified by the production
    JSONWhitespace.
---*/

assert.throws(SyntaxError, function() {
  JSON.parse('\u00a01234'); 
});
