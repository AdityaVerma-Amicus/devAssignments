// Q15.  difference / symmetricDifference 
// Write two functions: difference(arr1, arr2) and symmetricDifference(arr1, arr2). 
// difference returns elements in arr1 that are NOT in arr2. 
// symmetricDifference returns elements that appear in one array but not both. 
// You may use filter() and includes() — no need to avoid built-ins. 

function difference(arr1 : number[] , arr2 : number[]) : number[] {
    // const diff : number[] = [] 
    // for (const value of arr1){
    //     if (! arr2.includes(value)){
    //         diff.push(value)
    //     }
    // }
    // return diff;

    return arr1.filter(value => !arr2.includes(value));
}


function symmetricDifference(arr1 : number[] , arr2 : number[]) : number[] {
    const left = difference(arr1,arr2)
    const right = difference(arr2,arr1)

    return [...left,...right]
}

console.log(difference([1,2,3,4], [2,4]))
console.log(symmetricDifference([1,2,3], [2,3,4]))