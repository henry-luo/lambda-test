

/*---
es5id: 15.3.4.5-6-2
description: Function.prototype.bind - F can get inherited data property
---*/

var foo = function() {};

var obj = foo.bind({});

Function.prototype.property = 12;

assert.sameValue(obj.property, 12, 'obj.property');
