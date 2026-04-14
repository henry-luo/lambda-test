

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-JSON-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
testJSON("{}...", true);
testJSON('{"foo": truBBBB}', true);
testJSON('{foo: truBBBB}', true);
testJSON('{"foo": undefined}', true);
testJSON('{"foo": ]', true);
testJSON('{"foo', true);


print("Tests complete");
