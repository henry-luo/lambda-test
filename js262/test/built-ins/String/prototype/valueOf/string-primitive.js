

/*---
esid: sec-string.prototype.valueof
description: >
  If called on String primitive, returns it
info: |
  String.prototype.valueOf ( )

  1. Return ? thisStringValue(this value).

  thisStringValue ( value )

  1. If Type(value) is String, return value.
---*/

var valueOf = String.prototype.valueOf;

assert.sameValue('str'.valueOf(), 'str');
assert.sameValue(valueOf.call(''), '');
