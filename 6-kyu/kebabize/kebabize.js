function kebabize(str) {
  return str
    .replace(/[^a-zA-Z]/g, '')          
    .replace(/([A-Z])/g, '-$1')         
    .toLowerCase()                      
    .replace(/^-/, '');                 
}
​