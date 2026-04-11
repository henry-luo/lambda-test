

/*---
es5id: 7.3-6
description: >
    7.3 - ES5 recognizes the character <PS> (\u2029) as terminating
    string literal
---*/

        var prop = "66\u2029123";

assert.sameValue(prop, "66\u2029123", 'prop');
assert.sameValue(prop[2], "\u2029", 'prop[2]');
assert.sameValue(prop.length, 6, 'prop.length');
