// Q2.  flattenArray 
// Write a function flattenArray(arr) that flattens a deeply nested array into a single-level array. 
// Do NOT use .flat() or .flatMap(). 
// Handle any level of nesting. 

type NestedArray<T> = (T | NestedArray<T>)[];

const arr: NestedArray<number> = [1, [2, [3, [4, [5]]]]];
const arr1: NestedArray<number> = [1, [2, 3], [4, [5, 6]]];

function flattenArray(input: NestedArray<number>): number[] {
    let result: number[] = [];
    for (const value of input) {
        if (Array.isArray(value)) {
            result.push(...flattenArray(value));
        }
        else {
            result.push(value);
        }
    }
    return result;
}

const flattened = flattenArray(arr);
console.log(flattened); 

const flattened1 = flattenArray(arr1);
console.log(flattened1);