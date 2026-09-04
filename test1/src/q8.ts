// Q8.  curry 
// Write a curry(fn) function that turns a 3-argument function into a chain of single-argument functions. 
// You only need to support exactly 3 arguments for now.

const add = (a: number, b: number, c: number): number => a + b + c;

function curry(
    fn: (a: number, b: number, c: number) => number
) {
    return function (a: number) {
        return function (b: number) {
            return function (c: number) {
                return fn(a, b, c);
            };
        };
    };
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); 
console.log(curriedAdd(10)(20)(30)); 