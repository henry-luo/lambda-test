

/*---
esid: sec-html-like-comments
description: >
    A SingleLineHTMLCloseComment is considered to be a LineTerminator for
    purposes of parsing by the syntactic grammar.
info: |
    Comment ::
      MultiLineComment
      SingleLineComment
      SingleLineHTMLOpenComment
      SingleLineHTMLCloseComment
      SingleLineDelimitedComment

    MultiLineComment ::
      /* FirstCommentLine[opt] LineTerminator MultiLineCommentChars[opt] * / HTMLCloseComment[opt]

    HTMLCloseComment ::
      WhiteSpaceSequence[opt] SingleLineDelimitedCommentSequence[opt] --> SingleLineCommentChars[opt]
negative:
  phase: runtime
  type: Test262Error
---*/

var foo = [23]
-->[0];


if (foo[0] === 23) {
  throw new Test262Error();
}
