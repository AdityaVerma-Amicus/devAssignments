// Q12.  mergeObjects 
// Write a function mergeObjects(obj1, obj2) that merges two objects together.
// Keys in obj2 override keys in obj1. 
// If both values for a key are plain objects, merge them recursively instead of overwriting. 
// Arrays should just be overwritten, not merged element by element. 

interface Obj {
    [key: string]: number | Obj | number[];
}

function mergeObjects(obj1: Obj, obj2: Obj): Obj {
    const merged: Obj = { ...obj1 };
    for (const key in obj2) {
        const value1 = merged[key];
        const value2 = obj2[key];
        if (
            typeof value1 === "object" &&
            value1 !== null &&
            !Array.isArray(value1) &&
            typeof value2 === "object" &&
            value2 !== null &&
            !Array.isArray(value2)
        ) {
            merged[key] = mergeObjects(value1 as Obj, value2 as Obj);
        }
        else { 
            merged[key] = value2!;
        }
    }

    return merged;
}

const obj1: Obj = {
    a: 1,
    b: {
        x: 1,
        y: 2
    }
};

const obj2: Obj = {
    b: {
        y: 99
    },
    c: 4
};

console.log(mergeObjects(obj1, obj2));