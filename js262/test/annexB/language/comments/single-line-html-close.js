

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
      LineTerminatorSequence HTMLCloseComment

    HTMLCloseComment ::
      WhiteSpaceSequence[opt] SingleLineDelimitedCommentSequence[opt] --> SingleLineCommentChars[opt]
negative:
  phase: runtime
  type: Test262Error
---*/

var counter = 0;
-->
counter += 1;

-->the comment extends to these characters
counter += 1;

   -->the comment extends to these characters
counter += 1;

-->the comment extends to these characters
counter += 1;

 -->the comment extends to these characters
counter += 1;


if (counter === 5) {
  throw new Test262Error();
}
