

/*---
description: B.1.4 is not applied for Unicode RegExp - Incomplete hexadecimal escape sequences
info: |
    The compatibility extensions defined in B.1.4 Regular Expressions Patterns
    are not applied for Unicode RegExp.
    Tested extension: "IdentityEscape[U] :: [~U] SourceCharacter but not c"
es6id: 21.1.2
---*/


assert.throws(SyntaxError, function() {
  RegExp("\\x", "u");
}, 'RegExp("\\x", "u"): ');
assert.throws(SyntaxError, function() {
  RegExp("\\x1", "u");
}, 'RegExp("\\x1", "u"): ');


assert.throws(SyntaxError, function() {
  RegExp("[\\x]", "u");
}, 'RegExp("[\\x]", "u"): ');
assert.throws(SyntaxError, function() {
  RegExp("[\\x1]", "u");
}, 'RegExp("[\\x1]", "u"): ');
