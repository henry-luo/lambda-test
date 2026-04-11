 --> a comment


/*---
esid: sec-html-like-comments
description: >
    A SingleLineHTMLCloseComment is allowed in the first line when preceeded by spaces and single-line block comments
flags: [raw]
info: |
    InputElementHashbangOrRegExp ::
      WhiteSpace
      LineTerminator
      Comment
      CommonToken
      HashbangComment
      RegularExpressionLiteral
      HTMLCloseComment

    HTMLCloseComment ::
      WhiteSpaceSequence[opt] SingleLineDelimitedCommentSequence[opt] --> SingleLineCommentChars[opt]
negative:
  phase: runtime
  type: EvalError
---*/


throw new EvalError("This is not in a comment");
