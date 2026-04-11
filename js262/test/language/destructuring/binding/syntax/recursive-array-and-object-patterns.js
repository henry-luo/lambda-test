

/*---
es6id: 13.3.3
description: >
  Recursive array and object binding patterns
info: |
  Destructuring Binding Patterns - Syntax

  BindingPattern[Yield] :
    ObjectBindingPattern[?Yield]
    ArrayBindingPattern[?Yield]
features: [destructuring-binding]
---*/

function fn1([{}]) {}

function fn2([{a: [{}]}]) {}

function fn3({a: [,,,] = 42}) {}

function fn4([], [[]], [[[[[[[[[x]]]]]]]]]) {}

function fn4([[x, y, ...z]]) {}
