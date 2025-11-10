function ipToInt32(ip) {
  return ip.split('.')
           .reduce((acc, n) => (acc << 8) + +n, 0) >>> 0;
}
​