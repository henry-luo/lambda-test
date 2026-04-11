

/*---
esid: sec-delete-operator-runtime-semantics-evaluation
description: Strict Mode - TypeError is not thrown when deleting RegExp.length
---*/

var a = new RegExp();
var b = delete RegExp.length;
