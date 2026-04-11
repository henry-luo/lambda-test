

/*---
es6id: 19.1.2.10
description: >
    Object.is ( value1, value2 )

    7.2.9 SameValue(x, y)

    ...
    8. If Type(x) is Boolean, then
      a. If x and y are both true or both false,
          return true; otherwise, return false.
---*/

assert.sameValue(Object.is(true, true), true, "`Object.is(true, true)` returns `true`");
assert.sameValue(Object.is(false, false), true, "`Object.is(false, false)` returns `true`");
