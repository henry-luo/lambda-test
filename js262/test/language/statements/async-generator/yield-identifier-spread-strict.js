

/*---
description: It's an early error if the AssignmentExpression is a function body with yield as an identifier in strict mode. (Async generator Function declaration)
esid: prod-AsyncGeneratorDeclaration
features: [object-spread, async-iteration]
flags: [generated, onlyStrict]
negative:
  phase: parse
  type: SyntaxError
info: |
    Async Generator Function Definitions

    AsyncGeneratorDeclaration:
      async [no LineTerminator here] function * BindingIdentifier ( FormalParameters ) {
        AsyncGeneratorBody }


    Spread Properties

    PropertyDefinition[Yield]:
      (...)
      ...AssignmentExpression[In, ?Yield]

---*/
$DONOTEVALUATE();


var callCount = 0;

async function *gen() {
  callCount += 1;
  return {
       ...(function() {
          var yield;
          throw new Test262Error();
       }()),
    }
}

var iter = gen();


assert.sameValue(callCount, 1);
