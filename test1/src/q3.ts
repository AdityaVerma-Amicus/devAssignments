// Q3.  chunkArray 
// Write a function chunkArray(arr, size) that splits an array into groups of the given size. 
// The last chunk may be smaller if elements don't divide evenly. 
// If size is less than 1, return an empty array. 

const arr: number[] = [1, 2, 3, 4, 5];

function chunkArray(input:number[],size : number) : number[][] {
    const result: number[][] = [];
    if (size <= 0) {
        return [];
    }
    for (let i = 0; i<input.length; i += size) {
        const chunk = input.slice(i, i + size);
        result.push(chunk);
    }
    return result;
}

const chunked = chunkArray(arr, 4);
console.log(chunked);