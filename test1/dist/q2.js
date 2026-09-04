"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arr = [1, [2, [3, [4, [5]]]]];
const arr1 = [1, [2, 3], [4, [5, 6]]];
function flattenArray(input) {
    let result = [];
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
//# sourceMappingURL=q2.js.map