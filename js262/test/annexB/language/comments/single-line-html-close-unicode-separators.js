

/*---
esid: sec-html-like-comments
description: SingleLineHTMLCloseComment
info: |
    Comment ::
      MultiLineComment
      SingleLineComment
      SingleLineHTMLOpenComment
      SingleLineHTMLCloseComment
      SingleLineDelimitedComment

    SingleLineHTMLCloseComment ::
      LineTerminatorSequenceHTMLCloseComment

    HTMLCloseComment ::
      WhiteSpaceSequence[opt] SingleLineDelimitedCommentSequence[opt] --> SingleLineCommentChars[opt]
negative:
  phase: runtime
  type: Test262Error
---*/

var counter = 0;


counter -->a U+2028 LINE SEPARATOR between "counter" and "-->" means this is all a comment
counter += 1;

counter -->a U+2029 PARAGRAPH SEPARATOR between "counter" and "-->" means this is all a comment
counter += 1;


if (counter === 2) {
  throw new Test262Error();
}
