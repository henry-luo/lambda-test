

/*---
description: >
  Including nans.js will expose:

  var NaNs = [
    NaN,
    Number.NaN,
    NaN * 0,
    0/0,
    Infinity/Infinity,
    -(0/0),
    Math.pow(-1, 0.5),
    -Math.pow(-1, 0.5),
    Number("Not-a-Number"),
  ];

includes: [nans.js]
---*/

for (var i = 0; i < NaNs.length; i++) {
  assert.sameValue(Number.isNaN(NaNs[i]), true, "index: " + i);
}
