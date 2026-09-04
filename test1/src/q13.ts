// Q13.  zip / unzip 
// Write a zip(arr1, arr2) function that pairs up elements from two arrays, and an unzip(pairs) function that reverses it. 
// Stop at the shorter array if lengths differ. 

function zip<T , U >( arr1 : T[] , arr2 : U[] ) : [T,U][] {
    const zipped : [T,U][] = [] ;

    const length = Math.min(arr1.length , arr2.length)

    for (let i = 0; i < length; i++) {
        zipped.push([arr1[i]!,arr2[i]!]);
    }
    return zipped
}

function unzip<T,U> (pairs: [T,U][]): [T[],U[]] {
    const first : T[] = [];
    const second : U[] = [];

    for (const [a,b] of pairs) {
        first.push(a);
        second.push(b);
    }

    return [first,second];
}

console.log(zip([1,2,3,4,5], ['a','b','c','d']));
console.log(unzip([[1,'a'],[2,'b'],[3,'c']]))