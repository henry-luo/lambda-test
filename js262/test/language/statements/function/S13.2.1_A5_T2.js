

/*---
info: Closures are admitted
es5id: 13.2.1_A5_T2
description: >
    Returning a function that approximates the derivative of f  using
    an interval of dx, which should be appropriately small
---*/


function derivative(f, dx) {
    return function(x) {
      return (f(x + dx) - f(x)) / dx;
    };
}


if (Math.abs(derivative(Math.sin, 0.0001)(0) - derivative(Math.sin, 0.0001)(2*Math.PI)) >= 1/65536.0) {
	throw new Test262Error('#1: Math.abs(derivative(Math.sin, 0.0001)(0) - derivative(Math.sin, 0.0001)(2*Math.PI)) <= 1/65536.0');
}

