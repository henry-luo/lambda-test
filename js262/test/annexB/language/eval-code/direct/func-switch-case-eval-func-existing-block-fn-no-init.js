

/*---
description: Does not re-initialize binding created by similar forms (Function declaration in the `case` clause of a `switch` statement in eval code)
esid: sec-web-compat-evaldeclarationinstantiation
flags: [generated, noStrict]
info: |
    B.3.3.3 Changes to EvalDeclarationInstantiation

    [...]
    a. If declaredFunctionOrVarNames does not contain F, then
    [...]
---*/
var init;

(function() {
  eval(
    'init = f;\
    \
    {\
      function f() {}\
    }switch (1) {' +
    '  case 1:' +
    '    function f() {  }' +
    '}\
    '
  );
}());

assert.sameValue(init, undefined);
