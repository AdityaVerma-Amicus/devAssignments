"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const original = { a: 1, b: { c: [1, 2, 3] } };
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    if (Array.isArray(obj)) {
        const clone = [];
        for (const value of obj) {
            (clone.push(deepClone(value)));
        }
        return clone;
    }
    const clone = {};
    for (const key in obj) {
        clone[key] = deepClone(obj[key]);
    }
    return clone;
}
const cloneedObj = deepClone(original);
console.log(cloneedObj);
//# sourceMappingURL=q6.js.map