

/*---
es5id: 15.12.1.1-g6-6
description: >
    The JSON lexical grammer allows 'r' as a JSONEscapeCharacter after
    '' in a JSONString
---*/

assert.sameValue(JSON.parse('"\\r"'), '\r', 'JSON.parse(\'"\\r"\')');
