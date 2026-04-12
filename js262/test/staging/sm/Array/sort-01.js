

/*---
description: |
  array.sort compare-function gets incorrect this
info: bugzilla.mozilla.org/show_bug.cgi?id=604971
esid: pending
---*/

[1, 2, 3].sort(function() { "use strict"; assert.sameValue(this, undefined); });
