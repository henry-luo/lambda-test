

/*---
es6id: 13.3.3
description: >
  Array Binding Pattern with Rest Element
info: |
  Destructuring Binding Patterns - Syntax

  ArrayBindingPattern[Yield] :
    [ Elisionopt BindingRestElement[?Yield]opt ]
    [ BindingElementList[?Yield] ]
    [ BindingElementList[?Yield] , Elisionopt BindingRestElement[?Yield]opt ]

  BindingRestElement[Yield] :
    ... BindingIdentifier[?Yield]
features: [destructuring-binding]
---*/

function fn1([...args]) {}

function fn2([,,,,,,,...args]) {}

function fn3([x, {y}, ...z]) {}

function fn4([,x, {y}, , ...z]) {}

function fn5({x: [...y]}) {}
