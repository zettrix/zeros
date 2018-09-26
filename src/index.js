module.exports = function getZerosCount(number) {
  var res = 0,
      pow = 0
  for(var i = 1; pow < number; i++){
      var pow = Math.pow(5,i);
      res += Math.floor(number/pow);
  }
  return res;
}
