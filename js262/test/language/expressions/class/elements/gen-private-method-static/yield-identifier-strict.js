

/*---
description: It's an early error if the generator body has another function body with yield as an identifier in strict mode. (Static generator private method as a ClassExpression element)
esid: prod-GeneratorPrivateMethod
features: [generators, class-static-methods-private]
flags: [generated, onlyStrict]
negative:
  phase: parse
  type: SyntaxError
info: |
    ClassElement :
      static PrivateMethodDefinition

    MethodDefinition :
      GeneratorMethod

    14.4 Generator Function Definitions

    GeneratorMethod :
      * PropertyName ( UniqueFormalParameters ) { GeneratorBody }

---*/
$DONOTEVALUATE();

var callCount = 0;

var C = class {
    static *#gen() {
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
  "Private field '#gen' does not appear as an own property on C prototype"
);
assert(
  !Object.prototype.hasOwnProperty.call(C, "#gen"),
  "Private field '#gen' does not appear as an own property on C constructor"
);

var iter = C.gen();


assert.sameValue(callCount, 1);


assert(
  !Object.prototype.hasOwnProperty.call(C.prototype, "#gen"),
  "Private field '#gen' does not appear as an own property on C prototype"
);
assert(
  !Object.prototype.hasOwnProperty.call(C, "#gen"),
  "Private field '#gen' does not appear as an own property on C constructor"
);
