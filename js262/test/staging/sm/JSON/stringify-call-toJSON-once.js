

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-JSON-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var gTestfile = 'stringify-call-toJSON-once.js';

var BUGNUMBER = 584909;
var summary = "Stringification of Boolean/String/Number objects";

print(BUGNUMBER + ": " + summary);


var obj =
  {
    p: {
         toJSON: function()
         {
           return { toJSON: function() { return 17; } };
         }
       }
  };

assert.sameValue(JSON.stringify(obj), '{"p":{}}');


print("Tests complete");
