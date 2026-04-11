

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some returns false if 'length' is 0 (subclassed
    Array, length overridden with obj w/o valueOf (toString))
---*/

foo.prototype = new Array(1, 2, 3);

function foo() {}
var f = new foo();

var o = {
  toString: function() {
    return '0';
  }
};
f.length = o;


function cb() {}
var i = f.some(cb);


assert.sameValue(i, false, 'i');
