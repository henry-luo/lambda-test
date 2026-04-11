

/*---
info: |
    The production QuantifierPrefix :: * evaluates by returning the two
    results 0 and \infty
es5id: 15.10.2.7_A4_T8
description: >
    Execute /["'][^"']*["']/.test('alice cries out: don\'t') and check
    results
---*/

var __executed = /["'][^"']*["']/.test('alice cries out: don\'t');

assert(!__executed, 'The value of !__executed is expected to be true');
