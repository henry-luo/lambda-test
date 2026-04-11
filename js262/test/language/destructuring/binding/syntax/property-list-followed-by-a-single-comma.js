

/*---
es6id: 13.3.3
description: >
  The Binding Property List followed by a single comma is a valid syntax
info: |
  Destructuring Binding Patterns - Syntax

  ObjectBindingPattern[Yield] :
    { }
    { BindingPropertyList[?Yield] }
    { BindingPropertyList[?Yield] , }

features: [destructuring-binding]
---*/

function fn1({x,}) {}

function fn2({a: {p: q, }, }) {}

function fn3({x,}) {}
