

/*---
es5id: 15.12.1.1-g6-5
description: >
    The JSON lexical grammer allows 'n' as a JSONEscapeCharacter after
    '' in a JSONString
---*/

assert.sameValue(JSON.parse('"\\n"'), '\n', 'JSON.parse(\'"\\n"\')');
