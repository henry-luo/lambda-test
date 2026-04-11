

/*---
es5id: 15.3.4.5-16-2
description: >
    Function.prototype.bind - The [[Extensible]] attribute of internal
    property in F set as true
---*/

function foo() {}
var obj = foo.bind({});
obj.property = 12;

assert(obj.hasOwnProperty("property"), 'obj.hasOwnProperty("property") !== true');
