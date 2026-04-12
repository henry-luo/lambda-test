

/*---
description: >
    The `in` operator may occur within an exported AssignmentExpression
esid: sec-moduleevaluation
info: |
    [...]
    16. Let result be the result of evaluating module.[[ECMAScriptCode]].
    [...]

    15.2.3 Exports

    Syntax

    ExportDeclaration :

    export default [lookahead ∉ { function, class }] AssignmentExpression[In];
flags: [async, module]
features: [dynamic-import]
---*/
var x = { x: true };

export default 'x' in x;
import('./eval-export-dflt-expr-in.js').then(imported => {
  assert.sameValue(imported.default, true);
}).then($DONE, $DONE).catch($DONE);
