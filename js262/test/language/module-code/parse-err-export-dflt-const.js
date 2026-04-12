

/*---
esid: sec-exports
es6id: 15.2.3
description: The default export may not be a LexicalDeclaration (const)
flags: [module]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

export default const x = null;
