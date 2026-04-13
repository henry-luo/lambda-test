

/*---
esid: sec-string.prototype.trimEnd
description: Behavior when "this" value is a boolean.
info: |
  Runtime Semantics: TrimString ( string, where )
  2. Let S be ? ToString(str).

  ToString ( argument )
  Argument Type: Boolean
  Result:
    If argument is true, return "true".
    If argument is false, return "false".
features: [string-trimming, String.prototype.trimEnd]
---*/

var trimEnd = String.prototype.trimEnd

assert.sameValue(
  trimEnd.call(true),
  'true',
  'String.prototype.trimEnd.call(true)'
);

assert.sameValue(
  String.prototype.trimEnd.call(false),
  'false',
  'String.prototype.trimEnd.call(false)'
);
