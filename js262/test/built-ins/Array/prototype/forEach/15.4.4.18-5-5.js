

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - thisArg is object from object template
---*/

var res = false;
var result;

function callbackfn(val, idx, obj)
{
  result = this.res;
}

function foo() {}
var f = new foo();
f.res = true;

var arr = [1];
arr.forEach(callbackfn, f)

assert.sameValue(result, true, 'result');
