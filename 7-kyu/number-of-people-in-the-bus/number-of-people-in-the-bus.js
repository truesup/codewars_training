var number = function(busStops){
  return busStops.reduce((total, [on, off]) => total + on - off, 0);
}