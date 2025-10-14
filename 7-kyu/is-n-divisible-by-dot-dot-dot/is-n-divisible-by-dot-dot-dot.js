function isDivisible(){
  const args = Array.from(arguments)
  const n = args.shift()
  return args.every(x => n % x === 0)
}
​