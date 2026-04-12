

/*---
esid: sec-html-like-comments
description: Optional HTMLCloseComment following MultiLineComment
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


  -->the comment extends to these characters
counter += 1;


0
-->
counter += 1;

0
-->the comment extends to these characters
counter += 1;

0
-->the comment extends to these characters
counter += 1;

0

-->the comment extends to these characters
counter += 1;

0
 -->the comment extends to these characters
counter += 1;

0
  -->the comment extends to these characters
counter += 1;


if (counter === 12) {
  throw new Test262Error();
}
