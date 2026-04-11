

/*---
esid: sec-module-semantics-static-semantics-early-errors
es6id: 15.2.1.1
description: Exporting a global binding
info: |
    It is a Syntax Error if any element of the ExportedBindings of
    ModuleItemList does not also occur in either the VarDeclaredNames of
    ModuleItemList, or the LexicallyDeclaredNames of ModuleItemList.
flags: [module]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

export { Number };
