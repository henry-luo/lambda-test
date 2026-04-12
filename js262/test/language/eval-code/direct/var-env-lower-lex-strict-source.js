

/*---
esid: sec-evaldeclarationinstantiation
description: No variable collision with lexical binding in lower scope
info: |
    [...]
    5. If strict is false, then
    [...]
features: [let]
---*/

{
  let x;
  {
    eval('"use strict"; var x;');
  }
}
