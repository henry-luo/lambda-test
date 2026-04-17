

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var gTestfile = "error-expando-reconfigure.js"

var BUGNUMBER = 961494;
var summary =
  "Reconfiguring the first expando property added to an Error object " +
  "shouldn't assert";

print(BUGNUMBER + ": " + summary);


var err = new Error(); 
err.expando = 17;
Object.defineProperty(err, "expando", { configurable: false });


print("Tests complete");
