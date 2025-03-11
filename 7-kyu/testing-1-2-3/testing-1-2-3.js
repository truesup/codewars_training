var number=function(arr){
  return arr.map((el, ind) => (el = ind + 1 + ': ' + el))
}