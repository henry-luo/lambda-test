

/*---
description: ImportCall is a CallExpression, it can't be preceded by the new keyword (top level syntax)
esid: sec-import-call-runtime-semantics-evaluation
features: [dynamic-import]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ImportCall :
        import( AssignmentExpression )


    CallExpression:
      ImportCall

    ImportCall :
        import( AssignmentExpression[+In, ?Yield] )
---*/

$DONOTEVALUATE();

new import('');
