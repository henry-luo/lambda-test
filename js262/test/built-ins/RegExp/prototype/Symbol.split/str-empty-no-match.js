

/*---
es6id: 21.2.5.11
description: Unsuccessful match of empty string
info: |
    [...]
    22. If size = 0, then
        a. Let z be RegExpExec(splitter, S).
        b. ReturnIfAbrupt(z).
        c. If z is not null, return A.
        d. Assert: The following call will never result in an abrupt
           completion.
        e. Perform CreateDataProperty(A, "0", S).
        f. Return A.
features: [Symbol.split]
---*/

var result = /./[Symbol.split]('');

assert(Array.isArray(result));
assert.sameValue(result.length, 1);
assert.sameValue(result[0], '');
