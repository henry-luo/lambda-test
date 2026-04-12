

/*---
info: If y is +0 and x>0, Math.atan2(y,x) is +0
es5id: 15.8.2.5_A4
description: Checking if Math.atan2(y,x) equals to +0, where y is +0 and x>0
---*/


var y = +0;
var x = new Array();
x[0] = 0.000000000000001;
x[2] = +Infinity;
x[1] = 1;
var xnum = 3;

for (var i = 0; i < xnum; i++)
{
  assert.sameValue(Math.atan2(y, x[i]), 0, x[i]);
}
