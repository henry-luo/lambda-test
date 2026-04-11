

/*---
description: |
  pending
esid: pending
---*/


assert.sameValue((class {}).toString(), "class {}");
assert.sameValue(((class {})).toString(), "class {}");

