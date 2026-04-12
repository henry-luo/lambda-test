

/*---
es5id: 15.3.4.5.1-4-1
description: >
    [[Call]] - 'F''s [[BoundArgs]] is used as the former part of
    arguments of calling the [[Call]] internal method of 'F''s
    [[TargetFunction]] when 'F' is called
---*/

var func = function(x, y, z) {
  return x + y + z;
};

var newFunc = Function.prototype.bind.call(func, {}, "a", "b", "c");

assert.sameValue(newFunc(), "abc", 'newFunc()');
