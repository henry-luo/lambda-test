

/*---
flags:
  - noStrict
description: |
  JSOP_CALLEE should push undefined, not null, for this
info: bugzilla.mozilla.org/show_bug.cgi?id=611276
esid: pending
---*/


var calleeThisFun =
  function calleeThisFun(recurring)
  {
    if (recurring)
      return this;
    return calleeThisFun(true);
  };
assert.sameValue(calleeThisFun(false), this);

var calleeThisStrictFun =
  function calleeThisStrictFun(recurring)
  {
    "use strict";
    if (recurring)
      return this;
    return calleeThisStrictFun(true);
  };
assert.sameValue(calleeThisStrictFun(false), undefined);
