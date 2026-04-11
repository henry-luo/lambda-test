#! this comment ends with a Line Separator (U+2028) {
}


/*---
esid: pending
description: >
    Hashbang comments are terminated by the first LineTerminator: Line Separator
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
