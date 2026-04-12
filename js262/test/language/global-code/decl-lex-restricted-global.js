

/*---
esid: sec-globaldeclarationinstantiation
es6id: 15.1.8
description: Lexical declaration collides with existing "restricted global"
info: |
  [...]
  5. For each name in lexNames, do
     [...]
     c. Let hasRestrictedGlobal be ? envRec.HasRestrictedGlobalProperty(name).
     d. If hasRestrictedGlobal is true, throw a SyntaxError exception.
negative:
  phase: runtime
  type: SyntaxError
---*/

let undefined;
