

/*---
es5id: 15.3.4.5-21-2
description: >
    Function.prototype.bind - [[Get]] attribute of 'arguments'
    property in  'F' is thrower
---*/

function foo() {}
var obj = foo.bind({});

assert.throws(TypeError, function() {
  obj.arguments;
});
