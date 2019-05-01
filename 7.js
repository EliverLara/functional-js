function reduce(arr, fn, initial) {
    if (!arr.length) return []             // end condition
    var head = arr[0]                      // item to operate on
    head = head.toUpperCase()                // perform action
    var tail = arr.slice(1)                // next
    return [head].concat(toUpperArray(tail)) // recursive step

}
  
module.exports = reduce
