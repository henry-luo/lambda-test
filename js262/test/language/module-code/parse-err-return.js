

/*---
esid: sec-modules
es6id: 15.2
description: ReturnStatement may not be used directly within ModuleBody
info: |
  Syntax

  Module :
    ModuleBodyopt

  ModuleBody :
    ModuleItemList

  ModuleItemList :
    ModuleItem
    ModuleItemList ModuleItem

  ModuleItem:
    ImportDeclaration
    ExportDeclaration
    StatementListItem[~Yield, ~Return]
flags: [module]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

return;
