

/*---
es5id: 15.12.1.1-0-6
description: >
    <BOM> is not valid JSON whitespace as specified by the production
    JSONWhitespace.
---*/

assert.throws(SyntaxError, function() {
  JSON.parse('\ufeff1234'); 
});
