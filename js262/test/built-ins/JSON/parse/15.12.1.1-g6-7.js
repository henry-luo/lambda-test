

/*---
es5id: 15.12.1.1-g6-7
description: >
    The JSON lexical grammer allows 't' as a JSONEscapeCharacter after
    '' in a JSONString
---*/

assert.sameValue(JSON.parse('"\\t"'), '\t', 'JSON.parse(\'"\\t"\')');
