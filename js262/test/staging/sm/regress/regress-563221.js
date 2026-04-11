

/*---
description: |
  pending
esid: pending
---*/
"" + eval("(function () { if (x) ; else if (y) n(); else { " + Array(10000).join("e;") + " } });");

