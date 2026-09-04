"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arr = [
    { type: 'fruit', name: 'apple' },
    { type: 'veggie', name: 'carrot' },
    { type: 'fruit', name: 'mango' },
    { name: 'tea' }
];
function groupBy(arr, key) {
    const result = {};
    for (const item of arr) {
        const groupKey = item[key];
        if (groupKey === undefined) {
            continue;
        }
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(item);
    }
    return result;
}
const groupedItems = groupBy(arr, 'type');
console.log(groupedItems);
//# sourceMappingURL=q1.js.map