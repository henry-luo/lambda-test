

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf returns -1 if 'length' is 0 ( length
    is object overridden with obj w/o valueOf (toString))
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


var i = Array.prototype.lastIndexOf.call({
  length: {
    toString: function() {
      return '0';
    }
  }
}, 1);


assert.sameValue(i, -1, 'i');
