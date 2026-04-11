

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter - thisArg not passed
flags: [noStrict]
---*/

function innerObj() {
  this._15_4_4_20_5_30 = true;
  var _15_4_4_20_5_30 = false;

  function callbackfn(val, idx, obj) {
    return this._15_4_4_20_5_30;
  }
  var srcArr = [1];
  var resArr = srcArr.filter(callbackfn);
  this.retVal = resArr.length === 0;
}

assert(new innerObj().retVal, 'new innerObj().retVal !== true');
