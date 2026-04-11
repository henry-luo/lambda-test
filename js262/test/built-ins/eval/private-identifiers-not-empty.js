

/*---
esid: sec-evaldeclarationinstantiation
description: EvalDeclarationInstantiation throws SyntaxError if there is some invalid private identifier on its body
info: |
  EvalDeclarationInstantiation(body, varEnv, lexEnv, privateEnv, strict)
    ...
    6. Let privateIdentifiers be an empty List.
    7. Let privateEnv be privateEnv.
    8. Repeat while privateEnv is not null,
      a. For each binding named N in privateEnv,
        i. If privateIdentifiers does not contain N, append N to privateIdentifiers.
      b. Let privateEnv be privateEnv's outer environment reference.
    9. If AllPrivateIdentifiersValid of body with the argument privateIdentifiers is false, throw a SyntaxError exception.
    ...
features: [class-fields-private]
---*/

assert.throws(SyntaxError, function() {
  let o = {};
  eval("o.#f");
}, 'It should be a SyntaxError if AllPrivateIdentifiersValid returns false to eval body');

