"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arr = [1, 2, 3, 4, 5];
function chunkArray(input, size) {
    const result = [];
    if (size <= 0) {
        return [];
    }
    for (let i = 0; i < input.length; i += size) {
        const chunk = input.slice(i, i + size);
        result.push(chunk);
    }
    return result;
}
const chunked = chunkArray(arr, 4);
console.log(chunked);
//# sourceMappingURL=q3.js.map