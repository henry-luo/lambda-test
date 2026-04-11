#! this comment ends with a Carriage Return (U+000D)
{
}


/*---
esid: pending
description: >
    Hashbang comments are terminated by the first LineTerminator: Carriage Return
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]

    SingleLineCommentChars::
      SingleLineCommentChar SingleLineCommentChars[opt]

    SingleLineCommentChar::
      SourceCharacter but not LineTerminator

    LineTerminator::
      <LF>
      <CR>
      <LS>
      <PS>
flags: [raw]
features: [hashbang]
---*/
