

/*---
info: The value of Math.floor(x) is the same as the value of -Math.ceil(-x)
es5id: 15.8.2.9_A7
description: >
    Checking if Math.floor(x) is equal to -Math.ceil(-x) on 2000
    floating-point argument values
---*/


for (var i = -1000; i < 1000; i++)
{
  var x = i / 10.0;

  assert.sameValue(
    -Math.ceil(-x),
    Math.floor(x),
    'The value of `-Math.ceil(-x)` must return the same value returned by Math.floor(x)'
  );
}
