

/*---
es5id: 15.3.4.5-10-1
description: >
    Function.prototype.bind - internal property [[Class]] of 'F' is
    set as Function
---*/

var foo = function() {};

var obj = foo.bind({});

assert.sameValue(Object.prototype.toString.call(obj), "[object Function]", 'Object.prototype.toString.call(obj)');
