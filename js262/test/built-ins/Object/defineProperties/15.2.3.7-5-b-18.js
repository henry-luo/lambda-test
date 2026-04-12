

/*---
es5id: 15.2.3.7-5-b-18
description: >
    Object.defineProperties - 'enumerable' property of 'descObj' is
    inherited accessor property without a get function (8.10.5 step
    3.a)
---*/

var obj = {};
var proto = {};
var accessed = false;

Object.defineProperty(proto, "enumerable", {
  set: function() {}
});

var Con = function() {};
Con.prototype = proto;
var descObj = new Con();

Object.defineProperties(obj, {
  prop: descObj
});
for (var property in obj) {
  if (property === "prop") {
    accessed = true;
  }
}

assert.sameValue(accessed, false, 'accessed');
