

/*---
esid: sec-internalizejsonproperty
description: JSON.parse reviver call order
features: [for-in-order]
includes: [compareArray.js]
---*/

var calls = [];
function reviver(name, val) {
  calls.push(name);
  return val;
}

JSON.parse('{"p1":0,"p2":0,"p1":0,"2":0,"1":0}', reviver);


assert.compareArray(calls, ['1', '2', 'p1', 'p2', '']);
