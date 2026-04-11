

/*---
description: It's an early error if the generator body has another function body with yield as an identifier in strict mode. (Static async generator method as a ClassExpression element)
esid: prod-AsyncGeneratorPrivateMethod
features: [async-iteration, class-static-methods-private]
flags: [generated, onlyStrict]
negative:
  phase: parse
  type: SyntaxError
info: |
    ClassElement :
      static PrivateMethodDefinition

    MethodDefinition :
      AsyncGeneratorMethod

    Async Generator Function Definitions

    AsyncGeneratorMethod :
      async [no LineTerminator here] * PropertyName ( UniqueFormalParameters ) { AsyncGeneratorBody }

---*/
$DONOTEVALUATE();


var callCount = 0;

var C = class {
    static async *#gen() {
        callCount += 1;
        (function() {
            var yield;
            throw new Test262Error();
          }())
    }
    static get gen() { return this.#gen; }
}


assert(
  !Object.prototype.hasOwnProperty.call(C.prototype, "#gen"),
  "#gen does not appear as an own property on C prototype"
);
assert(
  !Object.prototype.hasOwnProperty.call(C, "#gen"),
  "#gen does not appear as an own property on C constructor"
);

var iter = C.gen();


assert.sameValue(callCount, 1);


assert(
  !Object.prototype.hasOwnProperty.call(C.prototype, "#gen"),
  "#gen does not appear as an own property on C prototype"
);
assert(
  !Object.prototype.hasOwnProperty.call(C, "#gen"),
  "#gen does not appear as an own property on C constructor"
);
