// Q4. Write a function paginate(arr, pageSize, pageNumber) that returns the correct slice of an array for a given page. 
// Pages start at 1. 
// If the page doesn't exist, return an empty array. 

const arr: number[] = [1, 2, 3, 4, 5,6,7,8,9,10];

function paginate(input: number[], pageSize: number, pageNumber: number): number[] {
    if (pageSize <= 0 || pageNumber <= 0) {
        return [];
    }
    for (let i = 0; i < input.length; i += pageSize) {
        const start = (pageNumber - 1) * pageSize;
        const end = start + pageSize;   
        if (i === start) {
            return input.slice(start, end);
        }       
    }
    return [];
}   

const paginated = paginate(arr, 3, 1);
console.log(paginated);