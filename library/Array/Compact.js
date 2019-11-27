/*
_.compact([0, 1, false, 2, '', 3, NaN]);
// => [1, 2, 3]
*/

export function compact(arr) {
    if(!Array.isArray(arr)) throw new Error('First argument must be an array')

    if(!arr.length) return arr

    return arr.filter(val => {
        return val !== '' && val && !isNaN(val)
    })
}

export default compact