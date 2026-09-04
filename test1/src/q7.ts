// Q7.  pipe 
// Write a function pipe(...fns) that takes a list of functions and returns a new function that runs them left to right, passing each result into the next. 
// Start simple — make it work for 3 functions first, then make it work for any number. 

const add10 = (x: number) => x + 10;
const double = (x: number) => x * 2;
const square = (x: number) => x * x;

function pipe(...fns: ((x: number) => number)[]) {
    return (input: number): number => {
        let result = input;

        for (const fn of fns) {
            result = fn(result);
        }
        return result;
    };
}
   
console.log(pipe(add10, double)(5));        
console.log(pipe(add10, double, square)(5)); 