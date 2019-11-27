/*
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
*/

export function concat() {
    const arr = Array.from(arguments)

    if(arr.length < 1) return []

    return [].concat(...arr)
}

export default concat