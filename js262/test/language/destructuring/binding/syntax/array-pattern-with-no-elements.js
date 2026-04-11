

/*---
es6id: 13.3.3
description: >
  The ArrayBindingPattern with no elements
info: |
  Destructuring Binding Patterns - Syntax

  ArrayBindingPattern[Yield] :
    [ Elisionopt BindingRestElement[?Yield]opt ]
    [ BindingElementList[?Yield] ]
    [ BindingElementList[?Yield] , Elisionopt BindingRestElement[?Yield]opt ]
features: [destructuring-binding]
---*/

function fn([]) {}
