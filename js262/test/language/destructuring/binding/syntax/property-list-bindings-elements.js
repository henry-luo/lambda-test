

/*---
es6id: 13.3.3
description: >
  The ObjectBindingPattern with binding elements
info: |
  Destructuring Binding Patterns - Syntax

  ObjectBindingPattern[Yield] :
    { }
    { BindingPropertyList[?Yield] }
    { BindingPropertyList[?Yield] , }

  BindingPropertyList[Yield] :
    BindingProperty[?Yield]
    BindingPropertyList[?Yield] , BindingProperty[?Yield]

  BindingProperty[Yield] :
    SingleNameBinding[?Yield]
    PropertyName[?Yield] : BindingElement[?Yield]

  BindingElement[Yield ] :
    SingleNameBinding[?Yield]
    BindingPattern[?Yield] Initializer[In, ?Yield]opt

  SingleNameBinding[Yield] :
    BindingIdentifier[?Yield] Initializer[In, ?Yield]opt

features: [destructuring-binding]
---*/


function fna({x: y}) {}


function fnb({x: y = 42}) {}


function fnc({x: {}}) {}
function fnd({x: {y}}) {}


function fne({x: {} = 42}) {}
function fnf({x: {y} = 42}) {}
