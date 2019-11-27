/*
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]
*/
export function differenceBy(first, ...rest) {
    const args = Array.from(arguments)
    if(args.length < 1) return []
    if(args.length === 1) return args[0]
    
    const it = rest.splice(rest.length -1,1)[0]
    const map = new Map()

    rest.forEach(arr => {
        if(!Array.isArray(arr)) throw new Error('First argument must be an array')
        arr.forEach(val => {
            map.set(it(val),true)
        })
    })

    return first.filter(val => !map.has(it(val)))
}

export default differenceBy