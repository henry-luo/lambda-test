

/*---
description: |
  Reconfiguring the first expando property added to an Error object shouldn't assert
info: bugzilla.mozilla.org/show_bug.cgi?id=961494
esid: pending
---*/

var err = new Error(); 
err.expando = 17;
Object.defineProperty(err, "expando", { configurable: false });
