function wallpaper(l, w, h) {
    const numbers = ["zero","one","two","three","four","five","six","seven","eight","nine","ten",
                     "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen",
                     "eighteen","nineteen","twenty"]
​
    if (l === 0 || w === 0 || h === 0) return "zero"
    
    const rollWidth = 0.52
    const rollLength = 10
    
    const perimeter = 2 * (l + w)
    
    const area = perimeter * h
    
    const rollArea = rollWidth * rollLength
    
    const rolls = Math.ceil(area / rollArea * 1.15)
    
    return numbers[rolls]
}
​