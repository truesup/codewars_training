function encode(str, n) {
  let keyDigits = String(n).split('').map(Number);
  return [...str].map((ch, i) => {
    let charCode = ch.charCodeAt(0) - 96;
    let key = keyDigits[i % keyDigits.length];
    return charCode + key;
  });
}
​