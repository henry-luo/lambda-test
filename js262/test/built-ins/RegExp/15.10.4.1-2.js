

/*---
es5id: 15.10.4.1-2
description: >
    RegExp - the thrown error is SyntaxError instead of RegExpError
    when the characters of 'P' do not have the syntactic form Pattern
---*/

assert.throws(SyntaxError, function() {
  var regExpObj = new RegExp('\\');
});
