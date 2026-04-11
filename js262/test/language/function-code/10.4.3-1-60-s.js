

/*---
es5id: 10.4.3-1-60-s
description: >
    checking 'this' (Injected setter)
---*/

var o = {};
var x = 2;
Object.defineProperty(o, "foo", { set: function(stuff) { x=this; } });
o.foo = 3;

assert.sameValue(x, o, 'x');
