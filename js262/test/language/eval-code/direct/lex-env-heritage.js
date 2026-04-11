

/*---
esid: sec-performeval
description: >
    Direct eval code sets the new declarative environment's outer environment
    to that of the current context.
info: |
    [...]
    9. If direct is true, then
       a. Let lexEnv be NewDeclarativeEnvironment(ctx's LexicalEnvironment).
       [...]
features: [let]
---*/

var actualStrict;
var actualNonStrict;

let x = 'outside';
{
  let x = 'inside';
  actualNonStrict = eval('x;');
  actualStrict = eval('"use strict"; x;');
}

assert.sameValue(actualNonStrict, 'inside', 'non strict mode');
assert.sameValue(actualStrict, 'inside', 'strict mode');
