

/*---
info: Equivalent to the expression RegExp.prototype.exec(string) != null
es5id: 15.10.6.3_A1_T6
description: >
    RegExp is /(z)((a+)?(b+)?(c))* / and tested string is
    (function(){return "zaacbbbcac"})()
---*/

var __re = /(z)((a+)?(b+)?(c))*/;

assert.sameValue(
  __re.test((function(){return "zaacbbbcac"})()),
  __re.exec((function(){return "zaacbbbcac"})()) !== null,
  '__re.test((function(){return "zaacbbbcac"})()) must return __re.exec((function(){return "zaacbbbcac"})()) !== null'
);
