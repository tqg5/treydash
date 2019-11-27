const sameValueZero = (x, y) => x === y || (Number.isNaN(x) && Number.isNaN(y));

export function difference() {
    const args = Array.from(arguments)
    const first = args[0]
    const rest = args.splice(1)
    const map = new Map()

    rest.forEach(arr => {
        if(!Array.isArray(arr)) throw new Error('First argument must be an array')

        arr.forEach(val => {
            map.set(val, true)
        })
    })

    return first.filter(val => !map.has(val))
}

export default difference