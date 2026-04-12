

/*---
info: let P be ToString(pattern) and let F be ToString(flags)
es5id: 15.10.4.1_A8_T13
description: >
    Pattern is "1" and flags is {toString:function(){throw "intostr";}
    }
---*/

try {
    throw new Test262Error('#1.1: new RegExp("1", {toString:function(){throw "intostr";}}) throw "intostr". Actual: ' + (new RegExp("1", {toString:function(){throw "intostr";}})));
} catch (e) {
  assert.sameValue(e, "intostr", 'The value of e is expected to be "intostr"');
}

