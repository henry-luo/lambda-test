

/*---
description: RegularExpressionClassChars may include the forward slash character
info: |
  11.8.5Regular Expression Literals

  RegularExpressionClass ::
    [ RegularExpressionClassChars ]

  RegularExpressionClassChars ::
    [empty]
    RegularExpressionClassChars RegularExpressionClassChar

  RegularExpressionClassChar ::
    RegularExpressionNonTerminator but not one of ] or \
    RegularExpressionBackslashSequence

  RegularExpressionNonTerminator ::
    SourceCharacterbut not LineTerminator
esid: sec-literals-regular-expression-literals
---*/

assert(/[/]/.test("/"), "Forward slash");
assert.sameValue(/[/]/.test("x"), false, "Forward slash");

assert(/[//]/.test("/"), "Forward slash - repeated");
assert.sameValue(/[//]/.test("x"), false, "Forward slash - repeated");
