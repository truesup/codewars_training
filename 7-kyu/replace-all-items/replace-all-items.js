function replaceAll(seq, find, replace) {
  return typeof seq === 'string'
    ? seq.split(find).join(replace)
    : seq.map(v => v === find ? replace : v);
}
​