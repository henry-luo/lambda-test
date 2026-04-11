

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach applied to the JSON object
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = ('[object JSON]' === Object.prototype.toString.call(obj));
}

JSON.length = 1;
JSON[0] = 1;
Array.prototype.forEach.call(JSON, callbackfn);

assert(result, 'result !== true');
