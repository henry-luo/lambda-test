

/*---
es6id: 19.1.2.10
description: >
    Object.is ( value1, value2 )

    7.2.9 SameValue(x, y)

    ...
    4. If Type(x) is Undefined, return true.
    ...

---*/

assert.sameValue(Object.is(undefined, null), false, "`Object.is(undefined, null)` returns `false`");
