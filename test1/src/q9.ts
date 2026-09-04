// Q9.  Write a function pick(obj, keys) that returns a new object with only the specified keys, and omit(obj, keys) that returns a new object with those keys removed. 

function pick<T>(obj:T , keys: (keyof T)[]) {
    const result: Partial<T> = {};
    for (const key of keys) {
        result[key] = obj[key]; 
    }
    return result;
}

function omit<T>(obj: T,keys: (keyof T)[]): Partial<T> {
    const result: Partial<T> = {};
    for (const key in obj) {
        if (keys.includes(key as keyof T)) {
            continue;
        }
        result[key] = obj[key];
    }
    return result;
}

const user = {
    a: 1,
    b: 2,
    c: 3
};

console.log(pick(user, ["a", "c"]));
console.log(omit(user, ["b"]));
