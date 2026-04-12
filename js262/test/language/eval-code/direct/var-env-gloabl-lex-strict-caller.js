

/*---
esid: sec-evaldeclarationinstantiation
description: No variable collision with global lexical binding
info: |
    [...]
    5. If strict is false, then
    [...]
flags: [onlyStrict]
features: [let]
---*/

let x;

eval('var x;');
