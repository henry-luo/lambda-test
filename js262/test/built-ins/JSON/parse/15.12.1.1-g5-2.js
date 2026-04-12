

/*---
es5id: 15.12.1.1-g5-2
description: >
    A JSONStringCharacter UnicodeEscape may not have fewer than 4 hex
    characters
---*/

assert.throws(SyntaxError, function() {
        JSON.parse('"\\u005"') 
});
