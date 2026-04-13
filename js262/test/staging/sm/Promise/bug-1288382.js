

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


Promise.all.call(class {
  constructor(exec){ exec(()=>{}, ()=>{}); }
  static resolve() { return {then(){}}; }
}, [null]);

