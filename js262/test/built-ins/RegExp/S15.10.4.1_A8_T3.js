

/*---
info: let P be ToString(pattern) and let F be ToString(flags)
es5id: 15.10.4.1_A8_T3
description: >
    Pattern is {toString:function(){return "[0-9]";}} and flags is
    (function(){return "m";})()
---*/

var __re = new RegExp({toString:function(){return "[0-9]";}}, (function(){return "m";})());

assert.sameValue(__re.ignoreCase, false, 'The value of __re.ignoreCase is expected to be false');
assert.sameValue(__re.multiline, true, 'The value of __re.multiline is expected to be true');
assert.sameValue(__re.global, false, 'The value of __re.global is expected to be false');
assert.sameValue(__re.lastIndex, 0, 'The value of __re.lastIndex is expected to be 0');
assert.notSameValue(typeof __re.source, "undefined", 'The value of typeof __re.source is not "undefined"');
