/*
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
*/
export function chunk(arr, numOf) {
    if(!Array.isArray(arr)) throw new Error('First argument must be an array')
    if(numOf < 1) return arr

    const resultArr = []

    while(arr.length) {
        resultArr.push(arr.splice(0,numOf))
    }

    return resultArr
}

export default chunk