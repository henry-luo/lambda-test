

/*---
description: |
  Convert computed property name expressions to property key before evaluating the property's value
info: bugzilla.mozilla.org/show_bug.cgi?id=1199546
esid: pending
---*/

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
