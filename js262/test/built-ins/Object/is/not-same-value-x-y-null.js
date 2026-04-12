

/*---
es6id: 19.1.2.10
description: >
    Object.is ( value1, value2 )

    7.2.9 SameValue(x, y)
    
    ...
    3. If Type(x) is different from Type(y), return false.
    ...
    5. If Type(x) is Null, return true.
    ...

---*/

assert.sameValue(Object.is(null), false, "`Object.is(null)` returns `false`");
assert.sameValue(Object.is(null, undefined), false, "`Object.is(null, undefined)` returns `false`");
