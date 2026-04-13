

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
let v = "global-v";

function f(v, global)
{
  with (global)
    return v;
}

assert.sameValue(f("argument-v", this), "argument-v",
         "let-var shouldn't appear in global for |with| purposes");

print("Tests complete");
