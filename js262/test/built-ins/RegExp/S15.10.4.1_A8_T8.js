

/*---
info: let P be ToString(pattern) and let F be ToString(flags)
es5id: 15.10.4.1_A8_T8
description: >
    Pattern is {toString:function(){throw "intostr";} } and flags is
    "error"
---*/

try {
    throw new Test262Error('#1.1: new RegExp({toString:function(){throw "intostr";}}, "error") throw "intostr". Actual: ' + (new RegExp({toString:function(){throw "intostr";}}, "error")));
} catch (e) {
  assert.sameValue(e, "intostr", 'The value of e is expected to be "intostr"');
}

