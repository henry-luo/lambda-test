

/*---
info: Object is the property of global
es5id: 15.2_A1
description: Checking if Object equals to this.Object
---*/

var obj = Object;

var thisobj = this.Object;

assert.sameValue(obj, thisobj, 'The value of obj is expected to equal the value of thisobj');
