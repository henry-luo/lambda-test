

/*---
esid: sec-evaldeclarationinstantiation
description: No variable collision with lexical binding in lower scope
info: |
    [...]
    5. If strict is false, then
       [...]
       d. Repeat while thisLex is not the same as varEnv,
       [...]
features: [let]
---*/

{
  let x;
  {
    (0,eval)('var x;');
  }
}
