

/*---
description: |
  Array.prototype.splice, when it deletes elements, should make sure any deleted but not visited elements are suppressed from subsequent enumeration
info: bugzilla.mozilla.org/show_bug.cgi?id=668024
esid: pending
---*/

var arr = [0, 1, 2, 3, 4, 5, , 7];

var seen = [];
var sawOneBeforeThree = true;
for (var p in arr)
{
  if (p === "1")
  {
    
    
    if (seen.indexOf("3") >= 0)
    {
      sawOneBeforeThree = false;
      break;
    }

    arr.splice(2, 3);
  }

  seen.push(p);
}

if (sawOneBeforeThree)
{
  
  
  assert.sameValue(seen.indexOf("3"), -1);
}
