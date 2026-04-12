

/*---
esid: sec-array.prototype.reduceright
description: Array.prototype.reduceRight applied to the JSON object
---*/

var accessed = false;

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return ('[object JSON]' === Object.prototype.toString.call(obj));
}

JSON.length = 1;
JSON[0] = 1;

assert(Array.prototype.reduceRight.call(JSON, callbackfn, 1), 'Array.prototype.reduceRight.call(JSON, callbackfn, 1) !== true');
assert(accessed, 'accessed !== true');
