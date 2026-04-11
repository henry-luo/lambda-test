

/*---
description: |
  Properly handle GC of a dictionary accessor property whose [[Get]] or [[Set]] has been changed to |undefined|
info: bugzilla.mozilla.org/show_bug.cgi?id=1082662
esid: pending
features: [host-gc-required]
---*/

function test(field)
{
  function inner()
  {
     
     var obj = { x: 42, get y() {}, set y(v) {} };

     
     delete obj.x;

     var desc = {};
     desc[field] = undefined;

     
     Object.defineProperty(obj, "y", desc);

  }

  inner();
  $262.gc(); 
}

test("get");
test("set");
