

/*---
info: Function is the property of global
es5id: 15.3_A1
description: Compare Function with this.Function
---*/

var obj = Function;

var thisobj = this.Function;

assert.sameValue(obj, thisobj, 'The value of obj is expected to equal the value of thisobj');
