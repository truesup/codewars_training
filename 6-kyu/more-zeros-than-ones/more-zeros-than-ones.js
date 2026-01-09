function moreZeros(s){
  const out = []
  for (const ch of s) {
    if (out.includes(ch)) continue
    const bin = ch.charCodeAt(0).toString(2)
    let zeros = 0, ones = 0
    for (const b of bin) b === '0' ? zeros++ : ones++
    if (zeros > ones) out.push(ch)
  }
  return out
}
​