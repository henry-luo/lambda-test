

/*---
es5id: 15.3.4.5-20-3
description: >
    Function.prototype.bind - [[Set]] attribute of 'caller' property
    in  'F' is thrower
---*/

function foo() {}
var obj = foo.bind({});
assert.throws(TypeError, function() {
  obj.caller = 12;
});
