

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight throws TypeError if 'length' is 0
    (subclassed Array, length overridden with obj w/o valueOf
    (toString)), no initVal
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
assert.throws(TypeError, function() {
  f.reduceRight(cb);
});
