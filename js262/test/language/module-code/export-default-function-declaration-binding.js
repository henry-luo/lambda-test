

/*---
description: >
  ExportDeclaration : HoistableDeclaration : FunctionDeclaration
  esid: prod-HoistableDeclaration
info: |
  ExportDeclaration :
    HoistableDeclaration[Yield, Await, Default]:

  HoistableDeclaration[Yield, Await, Default]:
    FunctionDeclaration[?Yield, ?Await, ?Default]

flags: [module]
---*/

export default function F() {}
F.foo = '';
