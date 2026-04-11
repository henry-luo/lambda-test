

/*---
es5id: 15.3.4.5-6-3
description: >
    Function.prototype.bind - F can get own data property that
    overrides an inherited data property
---*/

var foo = function() {};

var obj = foo.bind({});

Function.prototype.property = 3;
obj.property = 12;

assert.sameValue(obj.property, 12, 'obj.property');
