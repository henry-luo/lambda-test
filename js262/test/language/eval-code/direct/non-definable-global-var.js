

/*---
es6id: 18.2.1.2
description: Throws a TypeError if a global variable cannot be defined.
info: |
  Runtime Semantics: EvalDeclarationInstantiation( body, varEnv, lexEnv, strict)

  ...
  10. For each d in varDeclarations, do
    a. If d is a VariableDeclaration or a ForBinding, then
      i. For each String vn in the BoundNames of d, do
        1. If vn is not an element of declaredFunctionNames, then
          a. If varEnvRec is a global Environment Record, then
            i. Let vnDefinable be varEnvRec.CanDeclareGlobalVar(vn).
            ii. ReturnIfAbrupt(vnDefinable).
            iii. If vnDefinable is false, throw TypeError exception.
          ...
flags: [noStrict]
---*/

var nonExtensible;
try {
  Object.preventExtensions(this);
  nonExtensible = !Object.isExtensible(this);
} catch (e) {
  nonExtensible = false;
}


if (nonExtensible) {
  var error;
  try {
    eval("var unlikelyVariableName");
  } catch (e) {
    error = e;
  }

  assert(error instanceof TypeError);
}
