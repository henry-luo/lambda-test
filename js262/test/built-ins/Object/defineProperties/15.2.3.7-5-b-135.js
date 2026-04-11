

/*---
es5id: 15.2.3.7-5-b-135
description: >
    Object.defineProperties - 'descObj' is the Arguments object which
    implements its own [[Get]] method to get 'value' property (8.10.5
    step 5.a)
---*/

var obj = {};

var func = function(a, b) {
  arguments.value = "arguments";

  Object.defineProperties(obj, {
    property: arguments
  });

  return obj.property === "arguments";
};

assert(func(), 'func() !== true');
