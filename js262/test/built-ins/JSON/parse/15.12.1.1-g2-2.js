

/*---
es5id: 15.12.1.1-g2-2
description: A JSONString may not be delimited by single quotes
---*/

assert.throws(SyntaxError, function() {
  JSON.parse("'abc'");
});
