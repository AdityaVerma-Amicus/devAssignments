// Q10.  Write a function intersection(arr1, arr2) that returns elements that appear in both arrays, and union(arr1, arr2) that returns all unique elements from both arrays combined. 

function intersection ( arr1 : number[] , arr2 : number[]) : number[] {
    let result : number[] = [] ;
    for (const value of arr1) {
        if (arr2.includes(value)) {
            result.push(value); 
        }
    }
    return result
}

// function setIntersection ( arr1 : number[] , arr2 : number[]) : number[] {
//     const set = new Set(arr2);
//     let result : number[] = [] ;
//     for (const value of arr1) {
//         if (set.has(value)) {
//             result.push(value);
//         }
//     }
//     return result   
// }

function  union (arr1 : number[] , arr2 : number[]) : number[] {
    let result = [... arr1] ;
    for (const value of arr2){
        if (result.includes(value)){
            continue
        }
        else {
            result.push(value);
        }
    }
    return result
}    

console.log(intersection( [1, 2, 3] , [2, 3, 4]));
// console.log(setIntersection( [1, 2, 3] , [2, 3, 4]));
console.log(union([1, 2, 3], [2, 3, 4]));