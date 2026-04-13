

/*---
flags:
  - onlyStrict
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-extensions-shell.js]
description: |
  pending
esid: pending
---*/
"use strict"; 

var gTestfile = 'element-setting-ToNumber-detaches.js';

var BUGNUMBER = 1001547;
var summary =
  "Don't assert assigning into memory detached while converting the value to " +
  "assign into a number";

print(BUGNUMBER + ": " + summary);


var ab = new ArrayBuffer(64);
var ta = new Uint32Array(ab);
ta[4] = { valueOf() { $262.detachArrayBuffer(ab); return 5; } };


print("Tests complete");
