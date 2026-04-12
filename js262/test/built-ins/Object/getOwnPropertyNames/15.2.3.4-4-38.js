

/*---
es5id: 15.2.3.4-4-38
description: >
    Object.getOwnPropertyNames - own data properties are pushed into
    the returned array
---*/

var obj = {
  "a": "a"
};

var result = Object.getOwnPropertyNames(obj);

assert.sameValue(result[0], "a", 'result[0]');
