

/*---
description: >
  ExportDeclaration : HoistableDeclaration : AsyncFunctionDeclaration
  esid: prod-HoistableDeclaration
info: |
  ExportDeclaration :
    HoistableDeclaration[Yield, Await, Default]:

  HoistableDeclaration[Yield, Await, Default]:
    AsyncFunctionDeclaration[?Yield, ?Await, ?Default]

flags: [module]
---*/

export default async function A() {}
A.foo = '';
