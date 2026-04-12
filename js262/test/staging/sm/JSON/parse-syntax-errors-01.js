

/*---
includes: [sm/non262-JSON-shell.js]
description: |
  pending
esid: pending
---*/

testJSONSyntaxError("{}...");
testJSONSyntaxError('{"foo": truBBBB}');
testJSONSyntaxError('{foo: truBBBB}');
testJSONSyntaxError('{"foo": undefined}');
testJSONSyntaxError('{"foo": ]');
testJSONSyntaxError('{"foo');
