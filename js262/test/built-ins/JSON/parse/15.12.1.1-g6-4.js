

/*---
es5id: 15.12.1.1-g6-4
description: >
    The JSON lexical grammer allows 'f' as a JSONEscapeCharacter after
    '' in a JSONString
---*/

assert.sameValue(JSON.parse('"\\f"'), '\f', 'JSON.parse(\'"\\f"\')');
