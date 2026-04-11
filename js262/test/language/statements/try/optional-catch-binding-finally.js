

/*---
author: Lucas Azzola
esid: pending
description: try/catch/finally syntax with omission of the catch binding
features: [optional-catch-binding]
info: |
  Optional Catch Binding

  Catch[Yield, Await, Return]:
    (...)
    catch Block[?Yield, ?Await, ?Return]
---*/

try {} catch {} finally {}
