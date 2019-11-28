import * as _ from './library/index.js'
console.log(_)
console.log(_.chunk(['a', 'b', 'c', 'd'], 2))

console.log(_.compact([0, 1, false, 2, '', 3, NaN]))

console.log(_.concat([1], 2, [3], [[4]]))

console.log(_.difference([2, 1, 4, 5], [2, 3], [4]))

console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor))

console.log(_.differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], function(a,b) {
    if(a.x === b.x) return true
    
    return false
}))