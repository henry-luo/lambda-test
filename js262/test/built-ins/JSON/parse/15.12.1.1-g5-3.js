

/*---
es5id: 15.12.1.1-g5-3
description: >
    A JSONStringCharacter UnicodeEscape may not include any non=hex
    characters
---*/

assert.throws(SyntaxError, function() {
        JSON.parse('"\\u0X50"') 
});
