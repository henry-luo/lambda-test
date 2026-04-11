

/*---
es5id: 15.12.1.1-g6-1
description: >
    The JSON lexical grammer allows '/' as a JSONEscapeCharacter after
    '' in a JSONString
---*/

assert.sameValue(JSON.parse('"\\/"'), '/', 'JSON.parse(\'"\\/"\')');
