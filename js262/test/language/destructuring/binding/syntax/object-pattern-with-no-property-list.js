

/*---
es6id: 13.3.3
description: >
  The ObjectBindingPattern can be `{ }`
info: |
  Destructuring Binding Patterns - Syntax

  ObjectBindingPattern[Yield] :
    { }
    { BindingPropertyList[?Yield] }
    { BindingPropertyList[?Yield] , }

features: [destructuring-binding]
---*/

function fn({}) {}
