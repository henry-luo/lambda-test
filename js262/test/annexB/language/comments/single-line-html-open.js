

/*---
esid: sec-html-like-comments
description: SingleLineHTMLOpenComment
info: |
    Comment ::
      MultiLineComment
      SingleLineComment
      SingleLineHTMLOpenComment
      SingleLineHTMLCloseComment
      SingleLineDelimitedComment

    SingleLineHTMLOpenComment ::
      <!--SingleLineCommentCharsopt
negative:
  phase: runtime
  type: Test262Error
---*/

var counter = 0;
<!--
counter += 1;

<!--the comment extends to these characters
counter += 1;

counter += 1;<!--the comment extends to these characters
counter += 1;

var x = 0;
x = -1 <!--x;


if (counter === 4 && x === -1) {
  throw new Test262Error();
}
