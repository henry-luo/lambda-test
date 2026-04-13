

/*---
esid: sec-string.prototype.trimEnd
description: TrimEnd removes all line terminators from the end of a string.
info: |
  Runtime Symantics: TrimString ( string, where )
  ...
  4. Else if where is "end", let T be a String value that is a copy of S with
     trailing white space removed.
  ...

  The definition of white space is the union of WhiteSpace and LineTerminator.

features: [string-trimming, String.prototype.trimEnd]
---*/

var trimEnd = String.prototype.trimEnd;


var lt = '\u000A\u000D\u2028\u2029';

var str = lt + 'a' + lt + 'b' + lt;
var expected = lt + 'a' + lt + 'b';

assert.sameValue(
  trimEnd.call(str),
  expected
);
