

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-3-18
description: >
    Array.prototype.forEach - value of 'length' is a string that can't
    convert to a number
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
}

var obj = {
  0: 9,
  length: "asdf!_"
};

Array.prototype.forEach.call(obj, callbackfn);

assert.sameValue(accessed, false, 'accessed');
