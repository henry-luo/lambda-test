

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
if (typeof disassemble != 'undefined')
{
    var func = disassemble(function() { return "c\\d"; })

    
    assert.sameValue(func.indexOf("\\\\\\\\"), -1)
}

