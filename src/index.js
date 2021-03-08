
exports.min = function min (array) {
	if (!array) return 0
  let minNumber = array[0];
  if (minNumber === undefined) return 0
  for(let i = 1; i < array.length; i++) {
  if (array[i] < minNumber) minNumber = array[i];
    }
    return minNumber
}


exports.max = function max (array) {
  if (!array) return 0
  let maxNumber = array[0];
  if (maxNumber === undefined) return 0  
  for(let i = 1; i < array.length; i++) {
  if (array[i] > maxNumber) maxNumber = array[i];
    }
    return maxNumber
}

exports.avg = function avg (array) {
  if (!array) return 0
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
  sum += array[i]
    }
    if (isNaN(sum / array.length)) return 0
    return sum / array.length
}
