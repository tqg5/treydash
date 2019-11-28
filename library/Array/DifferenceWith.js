/*
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]
*/

export function differenceWith() {
    const args = Array.from(arguments)
    if(!args.length) throw new Error('differenceWith needs arguments!')

    const [arr, values = [], comparator = function (a,b) { 
        return a === b
    }] = arguments

    if(arr) {
        if(!Array.isArray(arr)) throw new Error('First argument must be an array')
        
        if(values)
            if(!Array.isArray(values)) throw new Error('Second argument must be an array')
        if(comparator)
            if(!comparator['call']) throw new Error('Third argument must be a function')
    }

    const map = new Map()

    values.forEach(val => {
        map.set(val,true)
    })

    return arr.filter(val => {
        for(const comp of values) {
            if(comparator(val,comp)) return false
        }

        return true
    })
}

export default differenceWith