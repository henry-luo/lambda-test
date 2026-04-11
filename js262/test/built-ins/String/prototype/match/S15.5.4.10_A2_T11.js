

/*---
info: match returns array as specified in 15.10.6.2
es5id: 15.5.4.10_A2_T11
description: >
    Regular expression is /([\d]{5})([-\ ]?[\d]{4})?$/. Last match is
    undefined.  And regular expression object have property lastIndex
    = tested_string.lastIndexOf("0")+1
---*/

var __string = "Boston, MA 02134";

var __matches = ["02134", "02134", undefined];

var __re = /([\d]{5})([-\ ]?[\d]{4})?$/;

__re.lastIndex = __string.lastIndexOf("0") + 1;


if (__string.match(__re).length !== 3) {
  throw new Test262Error('#1: __string.match(__re).length=== 3. Actual: ' + __string.match(__re).length);
}


if (__string.match(__re).index !== __string.lastIndexOf("0")) {
  throw new Test262Error('#2: __string.match(__re).index ===__string.lastIndexOf("0"). Actual: ' + __string.match(__re).index);
}


for (var mi = 0; mi < __matches.length; mi++) {
  if (__string.match(__re)[mi] !== __matches[mi]) {
    throw new Test262Error('#3.' + mi + ': __string.match(__re)[' + mi + ']===__matches[' + mi + ']. Actual: ' + __string.match(__re)[mi]);
  }
}

