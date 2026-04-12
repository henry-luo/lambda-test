

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - thisArg is object from object template
---*/

var res = false;

function callbackfn(val, idx, obj)
{
  return this.res;
}

function foo() {}
var f = new foo();
f.res = true;

var srcArr = [1];
var resArr = srcArr.map(callbackfn, f);

assert.sameValue(resArr[0], true, 'resArr[0]');
