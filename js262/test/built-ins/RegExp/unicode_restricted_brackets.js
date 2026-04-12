

/*---
description: B.1.4 is not applied for Unicode RegExp - Standalone brackets
info: |
    The compatibility extensions defined in B.1.4 Regular Expressions Patterns
    are not applied for Unicode RegExp.
    Tested extension: "Atom[U] :: PatternCharacter"
es6id: 21.1.2
---*/


assert.throws(SyntaxError, function() {
  RegExp("(", "u");
}, 'RegExp("(", "u"): ');
assert.throws(SyntaxError, function() {
  RegExp(")", "u");
}, 'RegExp(")", "u"): ');
assert.throws(SyntaxError, function() {
  RegExp("[", "u");
}, 'RegExp("[", "u"): ');
assert.throws(SyntaxError, function() {
  RegExp("]", "u");
}, 'RegExp("]", "u"): ');
assert.throws(SyntaxError, function() {
  RegExp("{", "u");
}, 'RegExp("{", "u"): ');
assert.throws(SyntaxError, function() {
  RegExp("}", "u");
}, 'RegExp("}", "u"): ');
