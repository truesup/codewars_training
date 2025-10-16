function moveTen(s){
  return s.replace(/[a-z]/g, c => String.fromCharCode((c.charCodeAt(0) - 97 + 10) % 26 + 97));
}
​