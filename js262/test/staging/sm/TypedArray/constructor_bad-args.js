

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-TypedArray-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var AB = new ArrayBuffer(12);	
var BC = new ArrayBuffer(14);	

assertThrowsInstanceOf(() => new Int32Array(AB, -1), RangeError); 
assertThrowsInstanceOf(() => new Int32Array(AB, 2), RangeError);  
assertThrowsInstanceOf(() => new Int32Array(BC), RangeError);	  
assertThrowsInstanceOf(() => new Int32Array(AB, 16), RangeError); 
assertThrowsInstanceOf(() => new Int32Array(AB, 0, 4), RangeError); 

