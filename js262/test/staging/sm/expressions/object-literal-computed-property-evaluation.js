

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-expressions-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var BUGNUMBER = 1199546;
var summary =
  "Convert computed property name expressions to property key before " +
  "evaluating the property's value";

print(BUGNUMBER + ": " + summary);


var s = "foo";
var convertsToS = { toString() { return s; } };

var o = {
  [convertsToS]: 
    (function() {
      s = 'bar';
      return 'abc'; 
     })(),

  [convertsToS]: 
    'efg' 
};

assert.sameValue(o.foo, "abc");
assert.sameValue(o.bar, "efg");


print("Tests complete");
