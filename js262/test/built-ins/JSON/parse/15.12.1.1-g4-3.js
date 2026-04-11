

/*---
es5id: 15.12.1.1-g4-3
description: >
    The JSON lexical grammar does not allow a JSONStringCharacter to
    be any of the Unicode characters U+0010 thru U+0017
---*/

assert.throws(SyntaxError, function() {
    JSON.parse('"\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017"'); 
});
