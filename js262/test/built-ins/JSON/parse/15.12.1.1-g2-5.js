

/*---
es5id: 15.12.1.1-g2-5
description: >
    A JSONStrings can contain no JSONStringCharacters (Empty
    JSONStrings)
---*/

assert.sameValue(JSON.parse('""'), "", 'JSON.parse(\'""\')');
