

/*---
es5id: 15.12.1.1-g6-3
description: >
    The JSON lexical grammer allows 'b' as a JSONEscapeCharacter after
    '' in a JSONString
---*/

assert.sameValue(JSON.parse('"\\b"'), '\b', 'JSON.parse(\'"\\b"\')');
