

/*---
description: >
  ImportCall parameter list forwards the Await production parameter - AwaitExpression
esid: sec-import-call-runtime-semantics-evaluation
info: |
  ImportCall[Yield, Await]:
    import ( AssignmentExpression[+In, ?Yield, ?Await] ,opt )
    import ( AssignmentExpression[+In, ?Yield, ?Await] , AssignmentExpression[+In, ?Yield, ?Await] ,opt )
features: [dynamic-import, import-attributes, async-functions]
flags: [async]
---*/

(async function () {
  return import('./2nd-param_FIXTURE.js', await undefined);
}())
  .then(function(module) {
    assert.sameValue(module.default, 262);
  })
  .then($DONE, $DONE);
