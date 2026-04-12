

/*---
es5id: 15.12.1.1-g5-1
description: >
    The JSON lexical grammar allows Unicode escape sequences in a
    JSONString
---*/

assert.sameValue(JSON.parse('"\\u0058"'), 'X', 'JSON.parse(\'"\\u0058"\')');
