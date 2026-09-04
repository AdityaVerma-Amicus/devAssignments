// Q6.  deepClone 
// Write a function deepClone(obj) that returns a full deep copy of a plain object or array. 
// Do NOT use JSON.parse(JSON.stringify()), structuredClone(), or any library. 
// Handle nested objects and nested arrays. 
// Does not need to handle functions, Dates, or Maps. 

const original = { a: 1, b: { c: [1, 2, 3] } }; 

function deepClone<T>(obj:T): T {
    if (obj === null || typeof obj !== "object"){
        return obj;
    }
    
    if (Array.isArray(obj)){
        const clone = [] as unknown[];
        for (const value of obj){ 
            (clone.push(deepClone(value)));
        }
        return clone as T;
    }

    const clone: any ={};
    for (const key in obj) {
        clone[key] = deepClone(obj[key]);
    }

    return clone;
}

const cloneedObj = deepClone(original);
console.log(cloneedObj);

cloneedObj.b.c.push(4); 
console.log(cloneedObj.b.c)
console.log(original.b.c)