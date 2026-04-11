

/*---
description: |
  Arguments when an object's toJSON method is called
info: bugzilla.mozilla.org/show_bug.cgi?id=584909
esid: pending
---*/

var obj =
  {
    p: {
         toJSON: function(key)
         {
           assert.sameValue(arguments.length, 1);
           assert.sameValue(key, "p");
           return 17;
         }
       }
  };

assert.sameValue(JSON.stringify(obj), '{"p":17}');
