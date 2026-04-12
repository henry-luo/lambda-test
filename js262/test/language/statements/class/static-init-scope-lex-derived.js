

/*---
esid: sec-runtime-semantics-classstaticblockdefinitionevaluation
description: Derivation of environment record for lexically-scoped bindings
info: |
  ClassStaticBlock : static { ClassStaticBlockBody }

    1. Let lex be the running execution context's LexicalEnvironment.
    2. Let privateScope be the running execution context's PrivateEnvironment.
    3. Let body be OrdinaryFunctionCreate(Method, « », ClassStaticBlockBody, lex, privateScope).
features: [class-static-block]
---*/

let probe;

class C {
  static {
    probe = C;
  }
}

assert.sameValue(probe, C);
