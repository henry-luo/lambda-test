

/*---
es5id: 15.7.4-1
description: "Number prototype object: its [[Class]] must be 'Number'"
---*/

var numProto = Object.getPrototypeOf(new Number(42));
var s = Object.prototype.toString.call(numProto);

assert.sameValue(s, '[object Number]', 's');
