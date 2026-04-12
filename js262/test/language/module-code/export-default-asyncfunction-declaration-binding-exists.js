

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
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class A {};
export default async function A() {}
