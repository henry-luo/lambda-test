

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

new Function('(() => new.target)()');


assertThrowsInstanceOf(() => eval('() => new.target'), SyntaxError);

function assertNewTarget(expected) {
    assert.sameValue((()=>new.target)(), expected);
    assert.sameValue(eval('()=>new.target')(), expected);

    
    return (() => new.target);
}

const ITERATIONS = 550;
for (let i = 0; i < ITERATIONS; i++)
    assert.sameValue(assertNewTarget(undefined)(), undefined);

for (let i = 0; i < ITERATIONS; i++)
    assert.sameValue(new assertNewTarget(assertNewTarget)(), assertNewTarget);

