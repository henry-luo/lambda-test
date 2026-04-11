

/*---
es5id: 11.3.1-2-3-s
description: >
  SyntaxError is not thrown if the identifier 'arguments[...]' appears as a
  PostfixExpression(arguments++)
---*/

function testcase() {
        arguments[1] = 7;
        arguments[1]++;
        assert.sameValue(arguments[1], 8, 'arguments[1]');
    }
testcase();
