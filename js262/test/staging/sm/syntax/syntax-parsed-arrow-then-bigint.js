

/*---
description: |
  Properly evaluate a bigint literal that's initially tokenized by a syntax parser (because the bigint literal appears immediately after an arrow function with expression body)
info: bugzilla.mozilla.org/show_bug.cgi?id=1596706
esid: pending
---*/


assert.sameValue(eval(`x=>{};
17n`), 17n);


assert.sameValue(eval(`x=>{}
42n`), 42n);


assert.sameValue(eval(`x=>y;
8675309n`), 8675309n);


assert.sameValue(eval(`x=>y
78051120n`), 78051120n);
