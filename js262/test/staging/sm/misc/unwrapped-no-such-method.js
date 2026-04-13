

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var x = "";

try { x.i(); } catch (ex) { }


try { x[x](); } catch (ex) { }


try { true.i(); } catch(ex) { }

