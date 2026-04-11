

/*---
es5id: 15.12.1.1-g2-1
description: JSONStrings can be written using double quotes
---*/

assert.sameValue(JSON.parse('"abc"'), "abc", 'JSON.parse(\'"abc"\')');
