// Q1.  groupBy 
// Write a function groupBy(arr, key) that groups an array of objects by a given key. 
// Return an object where each key is a unique value of the given property, and the value is an array of all matching objects. 
// If the key doesn't exist on some objects, skip them.   

interface Item {
  type?: string;
  name: string;
}

let arr: Item[] = [
    { type: 'fruit', name: 'apple' }, 
    { type: 'veggie', name: 'carrot' }, 
    { type: 'fruit', name: 'mango' },
    { name: 'tea'} 
]

function groupBy(arr: Item[], key: keyof Item): Record<string, Item[]> {
    const result: Record<string, Item[]> = {};
    
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