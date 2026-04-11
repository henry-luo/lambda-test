

/*---
es5id: 15.12.1.1-0-5
description: >
    <ZWSPP> is not valid JSON whitespace as specified by the
    production JSONWhitespace.
---*/

assert.throws(SyntaxError, function() {
  JSON.parse('\u200b1234'); 
});
