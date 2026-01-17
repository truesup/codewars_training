function changer(str) { 
  return str.replace(/[a-zA-Z]/g, c => {
    let next = String.fromCharCode(
      c.toLowerCase() === 'z' ? 'a'.charCodeAt(0) : c.toLowerCase().charCodeAt(0) + 1
    )
    return /[aeiou]/.test(next) ? next.toUpperCase() : next.toLowerCase()
  })
}
​