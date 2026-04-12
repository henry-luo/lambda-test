

/*---
description: |
  Don't crash constant-folding an |if| governed by a truthy constant, whose alternative statement is another |if|
info: bugzilla.mozilla.org/show_bug.cgi?id=1183400
esid: pending
---*/


if (true)
{
  assert.sameValue(true, true, "sanity");
}
else if (42)
{
  assert.sameValue(false, true, "not reached");
  assert.sameValue(true, false, "also not reached");
}
