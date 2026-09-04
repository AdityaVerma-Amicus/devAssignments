// Q11. Write a function objectDiff(obj1, obj2) that compares two objects and returns what changed — which keys were added, removed, or modified. 

type ObjectDiffResult = {
    added: string[];
    removed: string[];
    modified: string[];
};

function objectDiff( obj1 : Record<string,number> , obj2 : Record<string,number> ) : ObjectDiffResult {
    
    const change: ObjectDiffResult = {
        added: [],
        removed: [],
        modified: []
    };

    for (const key in obj1) {
        if (!(key in obj2)) {
            change.removed.push(key);
        }
        else if (obj1[key] !== obj2[key]) {
            change.modified.push(key);
        }
    }

    for (const key in obj2) {
        if (!(key in obj1)) {
            change.added.push(key);
        }
    }
    return change;
}

console.log(objectDiff(
  { a: 1, b: 2, c: 3 }, 
  { a: 1, b: 9, d: 4 } 
) )