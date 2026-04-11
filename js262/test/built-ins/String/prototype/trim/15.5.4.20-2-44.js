

/*---
es5id: 15.5.4.20-2-44
description: >
    String.prototype.trim - 'this' is a string that contains east
    Asian characters (value is 'SD咕噜')
---*/

var str = "SD咕噜";

assert.sameValue(str.trim(), str, 'str.trim()');
