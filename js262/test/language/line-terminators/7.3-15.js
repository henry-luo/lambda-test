

/*---
es5id: 7.3-15
description: 7.3 - ES5 recognize <BOM> (\uFFFF) as a whitespace character
---*/

        var prop = "a\uFFFFa";

assert.sameValue(prop.length, 3, 'prop.length');
assert.notSameValue(prop, "aa", 'prop');
assert.sameValue(prop[1], "\uFFFF", 'prop[1]');
