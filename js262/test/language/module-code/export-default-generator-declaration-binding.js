

/*---
description: >
  ExportDeclaration : HoistableDeclaration : GeneratorDeclaration
  esid: prod-HoistableDeclaration
info: |
  ExportDeclaration :
    HoistableDeclaration[Yield, Await, Default]:

  HoistableDeclaration[Yield, Await, Default]:
    GeneratorDeclaration[?Yield, ?Await, ?Default]

flags: [module]
---*/

export default function * G() {}
G.foo = '';
