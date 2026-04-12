

/*---
es5id: 12.2.1-16-s
description: >
    A Function constructor (called as a function) declaring a var
    named 'arguments' does not throw a SyntaxError
---*/

        Function('var arguments;');
