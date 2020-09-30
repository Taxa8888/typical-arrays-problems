exports.min = function min (array) {
    if (!array || array.length == 0) { 
      return 0;
    } else return Math.min(...array);
  }
  
  exports.max = function max (array) {
    if (!array || array.length == 0) {
      return 0;
    } else return Math.max(...array);
  }

  exports.avg = function avg (array) {
    let sum = 0;
    if (!array || array.length == 0) {
      return 0;
    } else {
      for (const num of array) {
        sum += num;
      } 
      return sum/array.length;
    }
  }
