

/*---
es5id: 15.10.6
description: RegExp.prototype is itself a not RegExp
---*/

  var s = Object.prototype.toString.call(RegExp.prototype);

assert.sameValue(s, '[object Object]', 's');
