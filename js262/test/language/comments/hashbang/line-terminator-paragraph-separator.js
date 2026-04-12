#! this comment ends with a Paragraph Separator (U+2029) {
}


/*---
esid: pending
description: >
    Hashbang comments are terminated by the first LineTerminator: Paragraph Separator
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
